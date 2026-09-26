export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método não permitido' }), { status: 405 });
  }

  const { product, price, audience, style, count } = await req.json();

  if (!product || !price || !audience) {
    return new Response(JSON.stringify({ error: 'Preencha todos os campos!' }), { status: 400 });
  }

  const estilos = {
    divertido: 'divertido e animado',
    profissional: 'profissional e confiável',
    urgente: 'urgente e imperdível',
    historia: 'emocional e envolvente'
  };

  const roteiros = [];
  for (let i = 0; i < count; i++) {
    roteiros.push({
      id: i + 1,
      titulo: `${product} — O que você precisa saber!`,
      gancho: i % 2 === 0 
        ? `Você sabia que o ${product} pode mudar seu dia?`
        : `Não deixe de conferir esse ${product} incrível!`,
      corpo: `O ${product} é perfeito para ${audience}! Com preço de R$ ${price}, qualidade e estilo ${estilos[style]}.`,
      chamada: `Aproveite agora! ✨`,
      hashtags: ['#TikTokShop', `#${product.replace(/\s+/g, '')}`, '#Ofertas', '#CompreAgora']
    });
  }

  return new Response(JSON.stringify({
    success: true,
    message: `✅ ${count} roteiro(s) gerado(s) com sucesso!`,
    promptRecebido: `${product} | R$ ${price} | Público: ${audience} | Estilo: ${style}`,
    quantidade: count,
    roteiros: roteiros,
    videoUrl: '#'
  }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  });
}
