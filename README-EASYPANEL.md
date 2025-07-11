# Uranyx - Deploy no EasyPanel

## Configuração para EasyPanel com Nixpacks

Este projeto está configurado para deploy automático no EasyPanel usando Nixpacks.

### Arquivos de Configuração

- `nixpacks.toml`: Configuração do build para Nixpacks
- `package.json`: Scripts atualizados para produção

### Como fazer o deploy

1. **Push para GitHub**: O código deve estar em um repositório GitHub
2. **Conectar no EasyPanel**: 
   - Acesse seu painel do EasyPanel
   - Crie um novo projeto
   - Conecte com seu repositório GitHub
   - O EasyPanel detectará automaticamente o `nixpacks.toml`

### Configurações do Build

- **Node.js**: Versão 18
- **Build Command**: `npm run build`
- **Start Command**: `npx serve dist -s -l 3000`
- **Port**: 3000

### Estrutura do Projeto

```
├── nixpacks.toml       # Configuração Nixpacks
├── package.json        # Dependências e scripts
├── index.html          # Página principal
├── style.css           # Estilos
├── src/               # Código fonte
└── dist/              # Build de produção (gerado)
```

### Scripts Disponíveis

- `npm run build`: Gera o build de produção
- `npm start`: Inicia o servidor de produção
- `npm run serve`: Serve os arquivos estáticos
- `npm run dev`: Desenvolvimento com Wrangler (Cloudflare)

### Variáveis de Ambiente

- `NODE_ENV=production`
- `PORT=3000`

### Notas Importantes

- O projeto serve arquivos estáticos da pasta `dist/`
- O servidor usa `serve` para hospedar os arquivos
- Configurado para SPA (Single Page Application)
- Porta padrão: 3000