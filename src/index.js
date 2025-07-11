// Este arquivo é necessário para o Cloudflare Workers Sites
// mas o conteúdo real é gerenciado automaticamente pelo Wrangler

export default {
  async fetch(request, env, ctx) {
    // Para sites estáticos, o Cloudflare Workers automaticamente
    // serve os arquivos da pasta dist/ configurada no wrangler.toml
    return new Response('Site estático configurado automaticamente', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  },
};