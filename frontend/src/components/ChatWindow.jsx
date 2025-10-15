import React, { useState } from 'react';

export default function ChatWindow(){
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  async function send(){
    if(!text) return;
    setMessages(prev=>[...prev, { role:'user', content:text }]);
    try{
      const res = await fetch('https://ai-support-bot-6y4m.onrender.com/api/ask', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ question:text })
      });
      const data = await res.json();
      setMessages(prev=>[...prev, { role:'assistant', content: data.answer || 'No answer' }]);
    }catch(err){
      setMessages(prev=>[...prev, { role:'assistant', content:'Error contacting server' }]);
    }
    setText('');
  }

  return (
    <div>
      <div className="chat-box" id="chatbox">
        {messages.map((m,i)=>(
          <div key={i} style={{display:'flex', justifyContent: m.role==='user' ? 'flex-end' : 'flex-start'}}>
            <div className={`bubble ${m.role==='user' ? 'user' : 'assistant'}`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <div className="input-area">
        <input value={text} onChange={e=>setText(e.target.value)} style={{flex:1, padding:8, borderRadius:6, border:'1px solid #cbd5e1'}} placeholder="Type a question" />
        <button onClick={send} style={{padding:'8px 12px', borderRadius:6, background:'#2563eb', color:'white', border:'none'}}>Send</button>
      </div>
    </div>
  );
}
