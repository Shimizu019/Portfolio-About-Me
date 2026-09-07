# DCIT50 — Laboratory 1

**Git, GitHub, and Branching**

---

## 📋 Student Information

| Field          | Value                                                    |
| -------------- | -------------------------------------------------------- |
| **Student**    | Benju Guzman                                             |
| **Repository** | [Shimizu019/lab1-guzman](https://github.com/Shimizu019/lab1-guzman) |
| **Local path** | `C:\Users\CCL305\Documents\lab1guzman`                   |

---

## 🗂️ Branch Structure

Two branches were created and pushed to GitHub:

| Branch      | Contents                              | Purpose                                        |
| ----------- | ------------------------------------- | ---------------------------------------------- |
| `no-style`  | Original HTML-only version            | Preserves the initial webpage exactly as created |
| `main`      | Full webpage with HTML, CSS, and JS   | Working / development version                  |

```
no-style              main
└── index.html        ├── index.html
                      ├── style.css
                      └── script.js
```

---

## 🚀 Steps Completed

### Step 1 — Configure Git

Set the global username and email so commits are linked to my GitHub account:

```bash
git config --global user.name "Benju Guzman"
git config --global user.email "benjugarcia01@gmail.com"
```

### Step 2 — Create the Project Folder

Created the project folder and opened it in Visual Studio Code:

```
C:\Users\CCL305\Documents\lab1guzman
```

### Step 3 — Initialize the Local Git Repository

Initialized Git inside the project folder and checked its status:

```bash
git init
git status
```

### Step 4 — Create the Initial HTML Webpage

Created the original HTML-only version of the webpage:

```
index.html
```

### Step 5 — Commit the Initial HTML Version

Staged and committed the HTML file:

```bash
git add index.html
git commit -m "Create initial HTML webpage"
```

### Step 6 — Create the `main` and `no-style` Branches

Renamed the default branch from `master` to `main`, then created the `no-style` branch to preserve the original HTML-only version:

```bash
git branch -M main
git branch no-style
```

The repository now has two branches:

```
main
no-style
```

### Step 7 — Create and Connect the GitHub Repository

Created a GitHub repository named `lab1-guzman`, then connected it to the local repository:

```bash
git remote add origin https://github.com/Shimizu019/lab1-guzman.git
git remote -v
```

**GitHub URL:** https://github.com/Shimizu019/lab1-guzman

### Step 8 — Push the `main` Branch

```bash
git push -u origin main
```

### Step 9 — Push the `no-style` Branch

```bash
git push -u origin no-style
```

Both branches are now available on GitHub. ✅

### Step 10 — Add CSS Styling and JavaScript Interactivity

Worked on the `main` branch and added the CSS and JavaScript files to complete the webpage:

```bash
git add style.css script.js
git commit -m "Add CSS styling and JavaScript interactivity"
git push origin main
```

---

## ⚙️ Git Commands Used

```bash
git config --global user.name "Benju Guzman"
git config --global user.email "benjugarcia01@gmail.com"
git init
git status
git add index.html
git commit -m "Create initial HTML webpage"
git branch -M main
git branch no-style
git switch main
git remote add origin https://github.com/Shimizu019/lab1-guzman.git
git remote -v
git push -u origin main
git push -u origin no-style
```

---

## 🎯 Goal of the Laboratory

The goal of this exercise is to practice:

1. Creating and managing a local Git repository
2. Creating commits and tracking changes
3. Working with Git branches
4. Preserving an original version using a separate branch
5. Connecting a local repository to GitHub
6. Pushing multiple branches to GitHub
7. Developing a webpage using HTML, CSS, and JavaScript

---

## ✅ Current Status

The Git and GitHub setup is **fully completed**:

- Local and remote repositories are connected.
- Both `main` and `no-style` branches are pushed to GitHub.
- The `main` branch contains the full webpage with HTML, CSS, and JavaScript.

The next development step is to continue improving the webpage on the `main` branch and push any new changes to GitHub.
