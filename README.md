# Recruitment Platform

[View demo](https://ari-mayi-project-recrutement.vercel.app/)
## 📌 Description
A Next.js web app for candidate recruitment, built with Ant Design, Redux, and multi-language support.

## 🚀 Installation

### Prerequisites
- Node.js (LTS version)
- Git installed

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/Mouaadgames/AriMayi-project-recrutement.git
   cd recruitment-platform 
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```

4. Open `http://localhost:3000/` in your browser.

## Side note
I don't think this is the best way to manege state 
in the real world project we will have a DB and `api end points` or `server action` to communicate with it

## 🛠 Technologies Used

- **Next.js 14** (App Router)
- **Ant Design** (UI Components)
- **Redux Toolkit** (State Management)
- **Next-i18next** (Multi-language Support)
- **VSCode** (Recommended IDE)

## 🌍 Multi-language Setup

- Default language: **French**
- Available translations: **English, French**
- To switch language: Modify `/public/locales/`

## 📌 UML Diagrams

UML diagrams are in the `/docs/` folder.

## TODO
- use server action to query DB
- Add dark mode
- Add job creation page
- Add auth to secure recruiter page 
- file upload sys and S3 bucket
## 📜 License

MIT License.