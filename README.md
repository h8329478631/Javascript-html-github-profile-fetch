# 🚀 GitHub User Finder

A simple web application to search GitHub users and display their profile details along with all public repositories.

---

## 📌 Features

* 🔍 Search any GitHub username
* 👤 Display user profile (image, name, bio)
* 👥 Show followers & following count
* 📦 Show total public repositories
* 🔗 List all repositories with clickable links

---

## 🛠️ Technologies Used

* HTML
* CSS (Bootstrap)
* JavaScript (Fetch API)
* GitHub API

---

## 📂 Project Structure

```
📁 project-folder
│── index.html
│── script.js
```

---

## ⚙️ How It Works

1. Enter a GitHub username in the search box
2. Click the **Refresh** button
3. App fetches data from GitHub API
4. Displays:

   * Profile Image
   * Name
   * Followers / Following
   * Bio
   * Public Repositories
   * List of all repos

---

## 💡 Code Explanation

### 🔹 Fetch User Data

```javascript
fetch(`https://api.github.com/users/${input.value}`)
```

### 🔹 Fetch Repositories

```javascript
fetch(repo_url)
```

### 🔹 Loop Through Repos

```javascript
for(let i = 0; i < repodata.length; i++){
    repo.innerHTML += `<span><a href="${repodata[i].svn_url}">${repodata[i].name}</a></span><br><br>`
}
```

---

## ▶️ How to Run

1. Download or clone this repository
2. Open `index.html` in your browser
3. Enter a GitHub username
4. Click **Refresh**

---

## ⚠️ Notes

* Make sure you have internet connection (API required)
* If user not found, no data will be shown

---

## 📸 Preview

Simple UI with:

* Profile section
* User details
* Repo list

---

## 🙌 Author

**Harshal Warke**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
