* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  background: #0a0a0a;
  color: #e0e0e0;
  font-family: 'Segoe UI', sans-serif;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  width: 100%;
  max-width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #121212;
}
header {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #2a2a2a;
}
#logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
}
h1 { font-size: 24px; font-weight: 300; letter-spacing: 2px; }
header p { font-size: 12px; color: #666; }
#chat-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
#messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.message {
  padding: 10px 14px;
  border-radius: 18px;
  max-width: 80%;
  word-wrap: break-word;
}
.user { background: #2a6f97; align-self: flex-end; }
.ai { background: #1e1e1e; align-self: flex-start; border: 1px solid #333; }
#input-area {
  display: flex;
  gap: 8px;
  padding: 10px 0;
}
#prompt-input {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 25px;
  background: #1e1e1e;
  color: white;
  outline: none;
}
#send-btn {
  padding: 12px 20px;
  background: #2a6f97;
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
