# ConvoQuest: Your Journey Through AI-Powered Interview Conversations

ConvoQuest is a job interview preparation platform powered by **Vapi AI Voice Agents**. It provides real-time AI-driven mock interviews, feedback analysis, and a seamless user experience. Built with **Next.js**, **Firebase**, and **TailwindCSS**, ConvoQuest ensures an engaging and efficient way to practice interviews.

## 🚀 Features

### 🔐 Authentication
- Sign Up & Sign In using Firebase authentication (email/password).

### 🎙️ AI-Powered Mock Interviews
- Generate job interview sessions with **Vapi AI Voice Agents**.
- Conduct real-time **voice-based** AI interviews.

### 📊 AI Feedback & Analysis
- Get **instant feedback** on your responses.
- AI-driven analysis helps improve your **interview skills**.

### 🎨 Modern UI/UX
- Fully responsive design using **TailwindCSS**.
- Interactive dashboard to manage interviews.

### 📌 Dashboard & Interview Management
- View past interviews and track your progress.
- Organize interviews efficiently.

---

## ⚙️ Tech Stack
- **Next.js** (Frontend & Backend)
- **Vapi AI** (Voice Agents for AI-driven interviews)
- **Firebase** (Authentication & Database)
- **Tailwind CSS** (UI/UX Design)
- **Google Gemini API** (AI Analysis)
- **shadcn/ui** (Reusable UI components)
- **Zod** (Schema validation)

---

## 🚀 Getting Started

### **Prerequisites**
Make sure you have the following installed:
- **Node.js** (v16+ recommended)
- **Git**

### **Clone the Repository**
```sh
git clone https://github.com/your-username/convoquest.git
cd convoquest
```

### **Install Dependencies**
```sh
npm install
```

### **Set Up Environment Variables**
Create a new file named `.env.local` in the root of your project and add the following:

```sh
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id
GOOGLE_GENERATIVE_AI_API_KEY=your_google_gemini_api_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key
```
🔹 Replace placeholder values with your actual credentials.

### **Run the Development Server**
```sh
npm run dev
```
- Open **http://localhost:3000** in your browser.
