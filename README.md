
````markdown
# 🧠 Story Generator using Generative AI (GPT-2)

This project is a **Story Generator Web App** that uses Generative AI (GPT-2) to create short stories from user input prompts. It features a React frontend and a Flask backend powered by Hugging Face Transformers.

---

## 📁 Project Structure

```bash
story-generator/
├── backend/
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── app.js
│   └── app.css
└── README.md         # Project documentation
````

---

## 🚀 How It Works

* The user enters a sentence into the React frontend.
* The frontend sends this sentence to the Flask backend.
* The Flask app uses GPT-2 to generate a story based on the input.
* The response is sent back and displayed to the user.

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Custom CSS

**Backend:**

* Python
* Flask + Flask-CORS
* Hugging Face Transformers (GPT-2)

---

## 🧪 Getting Started

### 📦 Backend Setup (`/backend`)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install flask flask-cors transformers
python app.py
```

### 💻 Frontend Setup (`/frontend`)

Make sure you have Node.js installed.

```bash
cd frontend
npm install
npm start
```

Make sure the backend is running on port 5000 and the React app is calling it at `http://localhost:5000`.

---

## 📸 Sample Output

> **Prompt:** "The stars shone brightly as she opened the old book."

**Generated Story:**

> "The stars shone brightly as she opened the old book. A rush of wind turned the pages on its own. She held her breath as golden light spilled out from the text. It was the beginning of something magical..."

---

## 🔮 Future Scope

* Add login/signup for saving user stories
* Genre-based story generation
* Display generated story history
* Multilingual story support
* Feedback system to improve generation quality

---

## 📜 License

This project is open-source and free for educational and non-commercial use.

---

## 🔗 References

* [Hugging Face Transformers](https://huggingface.co/transformers/)
* [Flask Documentation](https://flask.palletsprojects.com/)
* [React Documentation](https://reactjs.org/)

```

