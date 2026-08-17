export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt diperlukan' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        model: 'gpt-5.4-mini',
        input: prompt,
        store: true
      })
    });

    const data = await response.json();
    res.status(200).json({ answer: data.output || 'Tidak ada jawaban' });
  } catch (error) {
    res.status(500).json({ error: 'Gagal memproses permintaan' });
  }
}
