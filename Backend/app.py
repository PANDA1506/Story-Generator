from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
import re

app = Flask(__name__)
CORS(app)

# Load GPT-2 text generation pipeline
story_generator = pipeline("text-generation", model="gpt2")

@app.route("/generate", methods=["POST"])
def generate_story():
    data = request.get_json()
    prompt = data.get("prompt", "")
    print("Prompt received:", prompt)

    try:
        output = story_generator(
            prompt,
            max_length=400,        # Increased length of generated text
            num_return_sequences=1,
            do_sample=True,
            temperature=0.7,       # Lower temp for more coherent text
            top_k=50,
            top_p=0.95,
            truncation=True
        )


        generated_text = output[0]['generated_text']
        story = re.split(r'(?<=[.!?])\s', generated_text)
        short_story = ' '.join(story[:5])  # Take the first 5–6 sentences

        return jsonify({"story": short_story})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
