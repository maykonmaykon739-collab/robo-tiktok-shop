export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt é obrigatório' });
    }

    // Simulação de resposta de sucesso
    res.status(200).json({
      success: true,
      message: 'Requisição recebida com sucesso',
      promptRecebido: prompt,
      videoUrl: 'https://exemplo.com/seu-video-gerado.mp4'
    });

  } catch (erro) {
    console.error('Erro:', erro);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
