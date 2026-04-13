# InterviewIQ.AI

AI-powered mock interview platform to help candidates practice role-based interviews, get structured feedback, and track improvement over time.

## Key Features

- Google authentication with Firebase.
- Role-based interview generation with AI.
- Resume-aware question generation.
- Interview history and report tracking.
- Credit-based usage model with Razorpay integration.
- Secure cookie-based backend auth.

- ## Preview

![Dashboard](https://github.com/sanskaragrawal0608-bit/major_project_interviewIQ/raw/main/client/src/assets/screenshots/Dashboard.jpeg)

![Question Breakdown](https://github.com/sanskaragrawal0608-bit/major_project_interviewIQ/raw/main/client/src/assets/screenshots/Question%20Breakdown.png)

## Tech Stack

- Frontend: React, Vite, Redux Toolkit, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth: Firebase Google Auth + JWT (server session cookie)
- AI: OpenRouter API
- Payments: Razorpay

## Project Structure

```text
major_project_interviewIQ/
  client/   # React frontend
  server/   # Express backend
```

## Local Setup

### 1) Clone and install

```bash
git clone <your-repo-url>
cd major_project_interviewIQ
npm install
npm --prefix client install
npm --prefix server install
```

### 2) Configure environment variables

Create local env files:

- `client/.env`
- `server/.env`

Use this template:

```env
# client/.env
VITE_FIREBASE_APIKEY=your_firebase_web_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_public_key
VITE_SERVER_URL=http://localhost:8000
```

```env
# server/.env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLIENT_URLS=http://localhost:5173,http://localhost:5174
```

### 3) Run the app

From project root:

```bash
npm run dev:all
```

- Frontend runs on Vite (`http://localhost:5173` or fallback port)
- Backend runs on `http://localhost:8000`

## Authentication Notes

- Firebase authorized domains must include `localhost` for local development.
- Google provider must be enabled in Firebase Authentication.

## Deployment (Recommended)

- Frontend: Vercel (`client` as root directory)
- Backend: Render (`server` as root directory)

Set production env vars in hosting dashboards, not in repository files.

## Security Notes

- Never commit `.env` files.
- Rotate any key immediately if exposed.
- Keep API keys and secrets in hosting environment variables.

## Recruiter Demo Checklist

- Add live demo URL here once deployed.
- Add backend API URL (optional).
- Add 3-5 screenshots/GIFs of main flows:
  - Login
  - Interview start
  - Report view
  - Pricing/payment flow

## License

This project is for educational and portfolio use.
