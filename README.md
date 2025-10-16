AI Customer Support Bot
A full-stack AI-powered customer support chatbot using Google's Gemini API, React, and Express.
🌟 Features

Real-time AI-powered responses using Google Gemini 2.0 Flash
Clean and intuitive chat interface
Markdown support for formatted responses
Responsive design
CORS-enabled API for cross-origin requests
Deployed on Vercel (frontend) and Render (backend)


🚀 Getting Started


Prerequisites

Node.js (v14 or higher)
npm or yarn
Google Gemini API key (Get one here)


Current Implementation:

Direct user question forwarding to Gemini
No system context or personality defined
Relies on Gemini's default behavior

Recommended Prompt Enhancements
 Enhanced Customer Support Prompt
 
javascriptconst systemContext = `You are a helpful and friendly customer support assistant. 


Your role is to:
- Answer customer questions clearly and concisely
- Maintain a professional yet approachable tone
- Provide step-by-step instructions when needed
- Ask clarifying questions if the customer's request is unclear
- Stay within the scope of customer support topics


 Domain-Specific Prompt (Example: E-commerce)
 
javascriptconst ecommerceContext = `You are a customer support assistant for an e-commerce platform.

Your expertise includes:
- Order tracking and status
- Returns and refunds policy
- Product information and recommendations
- Account management
- Payment and shipping issues

Company Policies:
- 30-day return policy
- Free shipping on orders over $50
- 24/7 customer support available

Respond in a friendly, solution-oriented manner. If an issue requires escalation, 
guide the customer to contact: support@company.com`;


 Structured Response Prompt
javascriptconst structuredPrompt = `You are a customer support AI assistant.

For each customer query:
1. Acknowledge their concern
2. Provide a clear, concise answer
3. Offer additional help if needed

Format your responses with:
- **Bold** for important points
- Numbered lists for steps
- Bullet points for options

Keep responses under 150 words unless more detail is specifically requested.

Customer Question: ${userQuestion}`;



🌐 Deployment


Backend (Render)

Create a new Web Service on Render
Connect your GitHub repository
Set build command: cd backend && npm install
Set start command: cd backend && npm start
Add environment variable: GEMINI_API_KEY
Deploy!

Frontend (Vercel)

Install Vercel CLI: npm i -g vercel
Navigate to frontend directory
Run: vercel
Follow the prompts
Update the API endpoint in ChatWindow.jsx to your Render URL
