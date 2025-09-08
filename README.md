#Personal Portfolio with Flask

A personal portfolio website built using Flask, a micro-web framework for Python. This website displays personal information, skills, and links to social media profiles.

🔗 **Demo:** [https://cyann.pythonanywhere.com](https://cyann.pythonanywhere.com) active until 27 November 2025, toggle dark/light ERROR

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
2. 0ne by one

git clone https://github.com/username/portofolio.git
cd portfolio
python -m venv venv
source venv/bin/activate # Linux/Mac
venv\Scripts\activate # Windows
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
This project is licensed under the MIT License.

📬 Contact
If you have any questions or would like to collaborate, please contact me via:

Email: cyanervv@gmail.com
GitHub: github.com/kazervv

---

### **Usage Guide:**

1. **Replace Placeholders:**
- Replace `username` with your GitHub and PythonAnywhere username.
- Replace the demo URL with your website URL.
- Replace screenshot with a real screenshot of your website.
- Replace contact information with your information.

2. **Add Screenshot:**
- Upload a screenshot of your website to your GitHub repository.
- Replace the screenshot placeholder URL with the URL of the uploaded image.

3. **Add License File:**
- Create a `LICENSE` file in your repository and fill it with the MIT license text.

---

This `README.md` will help anyone visiting your GitHub repository understand the project's purpose, the technologies used, and how to run or deploy it. 😊
