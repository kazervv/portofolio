from flask import Flask, render_template

app = Flask(__name__)

# Data profil dengan deskripsi berjejer
PROFILE = {
    "nama": "Can Zervv",
    "profesi": "The Power of CTRL+C CTRL+V",
    "deskripsi": [
        "Make A Web with AI, JUst Prompt it, Collected the Script",
        "AI-Powered Developer, Instant Coding",
        "No Code, Just Copy-Paste Coder"
    ],
    "foto": "/static/kazma.jpeg",
    "sosial_media": {
        "LinkedIn": "https://linkedin.com/in/canzervv",
        "GitHub": "https://github.com/canzervv",
        "Email": "mailto:can@example.com"
    }
}

# Data proyek (opsional)
PROJECTS = [
    {"judul": "Project 1", "deskripsi": "SOON", "link": "#"},
    {"judul": "Project 2", "deskripsi": "SOON", "link": "#"}
]

@app.route("/")
def home():
    return render_template("index.html", profile=PROFILE, projects=PROJECTS)

if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0", port=5000)
