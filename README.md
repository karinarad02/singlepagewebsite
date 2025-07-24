# 📄 Hands-On Lab: Single Page Portfolio Website

Build and customize a single-page portfolio website using **HTML**, **CSS**, and **JavaScript**.


## 💾 Saving Your Progress

To download your project from the lab environment:

1. Right-click the project folder.
2. Select **Download** or **Export**.
3. Save it to your local machine for backup or submission.


## 🧰 Prework

Before starting the tasks:

- Ensure a working **VS Code** environment.
- Install the **Live Server** extension.
- Be familiar with basic **HTML**, **CSS**, and **JavaScript**.


## ✨ Project Tasks

### ✅ Task 1: Customize Profile Name

- In `index.html`, replace **Jane Doe** with your own name in the `profile_name` class.
- In `style.css`, update the `.profile_name` class:
  - Add a **light background color**.
  - Set `font-size: 30px`.
- Save and run using **Live Server**.
- 📸 Save screenshot as `profile_name.png`.


### ✅ Task 2: Complete Navigation Bar

- Add the following sections to the navigation bar: `Skills`, `Projects`, `Recommendations`.
- In `style.css`, update `.topmenu:hover`:
  ```css
  font-weight: bolder;
  text-decoration: underline;
- Save and test using **Live Server**
- 📸 Screenshot and save as `nav_bar.png`


## ✅ Task 3 — Customize the "About Me" Section

- Modify the **About Me** section:
  - Replace the placeholder name with your own.
  - Use a **unique profile image** (not the sample one).
  - Add a **brief summary** about yourself (or a fictitious persona).

- Save and test using **Live Server**
- 📸 Screenshot and save as `aboutme.png`


## ✅ Task 4 — Add More Skills

- In the **Skills** section:
  - Add **at least 3 more skills**.
  - Each should include an appropriate **logo** and **description**.

- Save and test using **Live Server**
- 📸 Screenshot and save as `skills.png`


## ✅ Task 5 — Customize Project Details

- In the **Projects** section:
  - Replace the default project headings and descriptions with **your own (or fictitious)**.
  - Use the `project-card` class.

- Save and test using **Live Server**
- 📸 Screenshot and save as `projects.png`


## ✅ Task 6 — Add Recommendations

- In the **Recommendations** section:
  - Replace the 3 default entries with **3 new fictitious recommendations** (25–30 words each).
  - Use the `recommendation` class for styling.

- Save and test using **Live Server**
- 📸 Screenshot and save as `recommendations.png`


## ✅ Task 7 — Add a New Recommendation via Button

- Ensure the `addRecommendation()` function is triggered by clicking the **Recommend** button.
- Enter text in the input field — it should be **added to the list** of recommendations dynamically.

- Save and test using **Live Server**
- 📸 Screenshot and save as `new_recommendation.png`


## ✅ Task 8 — Add Home Button Scroll-to-Top Feature

- In `index.html`, find the line:
  ```html
  <a href="#home">
- Add the following code inside it to make it functional and to take you to the start of the page when you click on the home icon:
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="63px">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
- Save and test using **Live Server**
- 📸 Screenshot and save as `home_icon.png`

## ✅ Task 9 — Add Popup Confirmation for Recommendation Submission

- Open `script.js` and find the `addRecommendation()` function.
- Add the following code inside the addRecommendation() function in the space provided, so that the showPopup() function is invoked onyl when a recommendation is submitted:
  showPopup(true);
- Go to div with id popup and add an apporpiate text confirmation message in the space provided
- Save and test using **Live Server**
- 📸 Screenshot and save as `popup.png`

