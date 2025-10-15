import fetch from "node-fetch";

export async function generate({ prompt }) {
  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) throw new Error("GEMINI_API_KEY not set");

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  console.log("Gemini Raw res:", JSON.stringify(data, null, 2));

  const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "Sorry, I couldn't get an answer.";

  return text;
}
