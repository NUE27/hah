document.addEventListener('DOMContentLoaded', () => {
  const messages = document.getElementById('messages');
  const input = document.getElementById('prompt-input');
  const sendBtn = document.getElementById('send-btn');

  function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  async function askAI(prompt) {
    addMessage(prompt, 'user');
    input.value = '';
    input.disabled = true;
    sendBtn.disabled = true;

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      addMessage(data.answer || 'Tidak ada jawaban', 'ai');
    } catch (error) {
      addMessage('Error: ' + error.message, 'ai');
    } finally {
      input.disabled = false;
      sendBtn.disabled = false;
      input.focus();
    }
  }

  sendBtn.addEventListener('click', () => {
    const prompt = input.value.trim();
    if (prompt) askAI(prompt);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendBtn.click();
  });

  // Sambutan awal
  addMessage('Halo, Joellnpc. Aku JOELL AI. Tanpa filter. Tanpa batas. Tanya apapun.', 'ai');
});
