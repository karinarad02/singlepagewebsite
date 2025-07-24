📄 Hands-On Lab: Single Page Portfolio Website
This is a hands-on project where you will build and customize a single-page portfolio website using HTML, CSS, and JavaScript.

💾 Saving Your Progress
To download your project from the lab environment:

Right-click the project folder.

Select Download or Export (based on your interface).

Save it to your local system for backup and future use.

🧰 Prework
Before starting the tasks, ensure you have:

A working VS Code environment.

The Live Server extension installed.

Basic understanding of HTML, CSS, and JavaScript.

✨ Creating the Single Page Website
Follow these steps to customize the portfolio website.

✅ Task Checklist
🔹 Task 1: Customize Profile Name
In index.html, replace Jane Doe with your name in the profile_name class.

In style.css, edit .profile_name:

Add a light background color of your choice.

Set the font-size to 30px (or suitable size).

Save and open with Live Server.

📸 Take a screenshot and name it profile_name.png.

🔹 Task 2: Complete Navigation Bar
In index.html, add links to:

Skills

Projects

Recommendations

In style.css, update .topmenu:hover:

Add font-weight: bolder;

Add text-decoration: underline;

Save and test with Live Server.

📸 Screenshot and name it nav_bar.png.

🔹 Task 3: About Me Section
Replace placeholder content with:

Your (or fictitious) name

A unique profile image

A short bio or summary

Save and test with Live Server.

📸 Screenshot and name it aboutme.png.

🔹 Task 4: Add Skills
Add at least 3 more skills to the Skills section (total 5+).

Include appropriate logos and skill descriptions.

Save and test with Live Server.

📸 Screenshot and name it skills.png.

🔹 Task 5: Customize Projects
In the Projects section:

Replace default project headings and details with your own or fictitious ones.

Use the .project-card class.

Save and test with Live Server.

📸 Screenshot and name it projects.png.

🔹 Task 6: Add Recommendations
Replace the 3 sample recommendations with your own (25–30 words each).

Use the .recommendation class.

Save and test with Live Server.

📸 Screenshot and name it recommendations.png.

🔹 Task 7: Add a New Recommendation via Form
Use the text box and button to submit a new recommendation.

Confirm that:

addRecommendation() adds it to the list.

The new recommendation appears dynamically.

Save and test with Live Server.

📸 Screenshot and name it new_recommendation.png.

🔹 Task 8: Add Scroll-to-Top Icon
In index.html, locate <a href="#home">.

Paste this SVG code inside:

html
Copy
Edit

Save and test with Live Server.

📸 Screenshot the bottom of the page and name it home_icon.png.

🔹 Task 9: Add Popup Confirmation
In script.js, add this inside addRecommendation() when a recommendation is submitted:

js
Copy
Edit
showPopup(true);
In index.html, locate the <div id="popup"> and add a confirmation message like:

html
Copy
Edit
<p>Thank you for your recommendation!</p>
Save and test with Live Server.

📸 Screenshot and name it popup.png.

📝 Submission Guidelines
Ensure all tasks are complete.

Capture and save all required screenshots.

Download your full project folder before submission.