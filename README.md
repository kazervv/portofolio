# Personal Portfolio with Flask

A personal portfolio website built using Flask, a micro-web framework for Python. This website displays personal information, skills, and links to social media profiles.

---

## 🛠 Technologies Used

- **Programming Language:** [Python](https://www.python.org/)
- **Web Framework:** [Flask](https://flask.palletsprojects.com/)
- **Template Engine:** [Jinja2](https://jinja.palletsprojects.com/)
- **Styling:** CSS3, [Font Awesome](https://fontawesome.com/)
- **Font:** [Google Fonts](https://fonts.google.com/) (Orbitron, Poppins)
- **Hosting:** [PythonAnywhere](https://www.pythonanywhere.com/) *(or any other hosting service you use)*

---

## 🚀 How to Run a Project Locally

1. **Clone this repository:**


git clone https://github.com/username/portofolio.git

cd portfolio

python -m venv venv

source venv/bin/activate #forLinux/Mac

venv\Scripts\activate #forWindows

pip install -r requirements.txt


## How to Deploy to PythonAnywhere

Upload the project files to the PythonAnywhere directory.
Install dependencies:
Copy pip install --user -r requirements.txt

WSGI Configuration:

Edit the WSGI file in PythonAnywhere and add the following code:
Copyimport sys
path = '/home/username/portofolio'
if path not in sys.path:
sys.path.append(path)

from app import app as application

Reload the web application in the PythonAnywhere Web tab.

📝 Content Description
This portfolio website displays:

Name and Profession: Displays my name and profession.
Profile Photo: Personal photo for visual identity.
Skills Description: List of skills and expertise.
Social Media Links: Links to LinkedIn and GitHub.

🎨 Design and Styling
This website design uses:

Color Gradients: For an engaging visual effect.
Glow Effects: On text and important elements.
Simple Animations: For more lively interactions.
Responsive Layout: To display well on all devices.

🤝 Contributions
If you would like to contribute or provide suggestions, please open an issue or pull request in this repository. All feedback is greatly appreciated!

📜 License
This project is Free licensed.

📬 Contact
If you have any questions, please contact me via:
X: https://x.com/RocZelv/ (SlowRespond)
Email: cyannervv@gmail.com

---
