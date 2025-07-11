# Uranyx Landing Page

Uma landing page moderna e responsiva para a Uranyx Technologies, construída com HTML, CSS e JavaScript vanilla, otimizada para deploy no Cloudflare Workers.

## 🚀 Deploy no Cloudflare Workers

### Pré-requisitos

1. Conta no [Cloudflare](https://cloudflare.com)
2. Node.js instalado
3. Wrangler CLI instalado globalmente:
   ```bash
   npm install -g wrangler
   ```

### Configuração

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Faça login no Cloudflare:**
   ```bash
   wrangler login
   ```
   Isso abrirá seu navegador para autenticação OAuth.

3. **Configure o projeto:**
   - Edite o arquivo `wrangler.toml` e altere o nome do projeto se necessário
   - O projeto está configurado como Cloudflare Workers Sites para servir arquivos estáticos

4. **Build do projeto:**
   ```bash
   npm run build
   ```

5. **Deploy para produção:**
   ```bash
   npm run deploy
   ```
   ou diretamente:
   ```bash
   wrangler publish
   ```

### Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento local
- `npm run build` - Constrói os arquivos para produção
- `npm run deploy` - Faz deploy para o Cloudflare Workers
- `npm run preview` - Preview local do projeto

### Estrutura do Projeto

```
uranyx1/
├── src/
│   └── index.js          # Worker script principal
├── dist/                  # Arquivos buildados
│   ├── index.html
│   └── style.css
├── index.html             # Página principal
├── style.css              # Estilos (se existir)
├── package.json           # Dependências do projeto
├── wrangler.toml          # Configuração do Cloudflare Workers
└── README.md              # Este arquivo
```

### Recursos

- ✅ Design responsivo e moderno
- ✅ Efeitos visuais avançados (binary rain, animações CSS)
- ✅ Otimizado para performance
- ✅ Deploy automático no Cloudflare Workers
- ✅ CDN global do Cloudflare
- ✅ HTTPS automático

### Personalização

Para personalizar a landing page:

1. Edite o arquivo `index.html` para alterar o conteúdo
2. Modifique os estilos diretamente no `<style>` do HTML ou crie um arquivo CSS separado
3. Execute `npm run build` para atualizar os arquivos na pasta `dist`
4. Execute `npm run deploy` para publicar as alterações

### Suporte

Para dúvidas sobre o Cloudflare Workers, consulte a [documentação oficial](https://developers.cloudflare.com/workers/).

---

© 2025 URANYX TECHNOLOGIES. Todos os direitos reservados.