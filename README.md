# Robô TikTok Shop V3

## O que esta versão faz

- Gera vários roteiros diferentes para o mesmo produto.
- Cria ganchos diferentes automaticamente.
- Gera legenda e hashtags.
- Envia cada roteiro para geração de vídeo.
- Aceita foto pública do produto como primeiro frame opcional.
- Formato vertical 720x1280 para TikTok.
- Mantém a API Key apenas no servidor.

## Instalação

1. Instale Node.js 18+.
2. Entre nesta pasta no terminal.
3. `npm install`
4. Copie `.env.example` para `.env`.
5. Crie sua chave no Runway Dev e coloque em `RUNWAYML_API_SECRET`.
6. `npm start`
7. Abra `http://localhost:3000`.

## Atenção sobre custos

Cada vídeo gerado consome créditos do provedor. Gerar 5 vídeos consome aproximadamente 5 vezes o crédito de uma geração equivalente. Verifique os preços atuais antes de usar em lote.

## Foto do produto

Se quiser que o vídeo seja baseado em uma foto específica do produto, informe uma URL pública direta para uma imagem JPG/PNG/WebP. A imagem precisa estar acessível pelo servidor da API.

## Segurança

Nunca coloque sua API Key no HTML, JavaScript do navegador ou em prints.
