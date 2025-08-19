# Instruções para Deploy no Vercel

## Status Atual
✅ Repositório remoto configurado: `https://github.com/rooseveltsa/gmnpro.git`
✅ Branch renomeada para `main`
⚠️  Falha na autenticação GitHub para push automático

## Método 1: Manual via GitHub (Recomendado)

### Passo 1: Verificar o repositório GitHub
1. Acesse [https://github.com/rooseveltsa/gmnpro](https://github.com/rooseveltsa/gmnpro)
2. Verifique se o repositório existe e se você tem permissão de acesso
3. Se não existir, crie um novo repositório com esse nome

### Passo 2: Fazer o upload manualmente
Se você tem acesso ao repositório, siga estes comandos no terminal:

```bash
# Entre na pasta do projeto
cd /home/z/my-project

# Configure suas credenciais do GitHub (se necessário)
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"

# Faça o push para o GitHub
git push -u origin main
```

Se pedir senha/token, você precisará:
- Criar um Personal Access Token no GitHub
- Usar o token como senha

### Passo 3: Conectar com Vercel
1. Acesse [https://vercel.com](https://vercel.com)
2. Faça login
3. Clique em "New Project"
4. Selecione "Import Git Repository"
5. Escolha `gmnpro` da lista
6. Clique em "Import"

### Passo 4: Configurar o projeto
O Vercel detectará automaticamente:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

Deixe todas as configurações padrão e clique em "Deploy"

---

## Método 2: Upload Direto no Vercel (Sem GitHub)

### Passo 1: Compactar o projeto
```bash
# Saia da pasta do projeto
cd ..

# Compacte a pasta
zip -r gmnpro.zip my-project/
```

### Passo 2: Upload no Vercel
1. Acesse [https://vercel.com](https://vercel.com)
2. Faça login
3. Clique em "New Project"
4. Selecione a aba "Upload"
5. Arraste o arquivo `gmnpro.zip` ou clique para selecionar
6. Clique em "Upload"

### Passo 3: Configurar e Deploy
- **Project Name**: `gmnpro` (ou outro nome de sua preferência)
- **Framework**: Next.js (detectado automaticamente)
- Clique em "Deploy"

---

## Método 3: Usar Vercel CLI

### Passo 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Passo 2: Login
```bash
vercel login
```

### Passo 3: Deploy
```bash
# Entre na pasta do projeto
cd /home/z/my-project

# Faça o deploy
vercel

# Para produção
vercel --prod
```

---

## Verificações Pós-Deploy

### 1. Testar o site
Após o deploy, acesse a URL fornecida pelo Vercel (geralmente `https://gmnpro.vercel.app`) e verifique:
- ✅ Página carrega corretamente
- ✅ Logo do Google está visível
- ✅ Links de WhatsApp funcionam
- ✅ Design responsivo (mobile e desktop)
- ✅ Todas as seções estão presentes

### 2. Configurar domínio personalizado (opcional)
1. No painel do Vercel, vá para "Settings" > "Domains"
2. Adicione seu domínio (ex: `seusite.com.br`)
3. Siga as instruções para configurar DNS

### 3. Monitoramento
- Acompanhe o desempenho em "Analytics"
- Verifique logs em "Logs" se houver erros

---

## Comandos Úteis

### Para testar localmente antes do deploy:
```bash
cd /home/z/my-project
npm run build
npm start
```

### Para verificar erros:
```bash
npm run lint
```

### Para atualizar o projeto após o deploy:
```bash
# Faça as alterações necessárias
git add .
git commit -m "Descrição das alterações"
git push origin main
```

O Vercel detectará automaticamente o novo push e fará um novo deploy.

---

## Notas Importantes

- **Gratuito**: O Vercel oferece um plano gratuito generoso para projetos pessoais
- **HTTPS**: O certificado SSL é configurado automaticamente
- **CDN**: Seu site será servido globalmente através da CDN do Vercel
- **Auto-deploy**: Cada push para o branch principal aciona um novo deploy
- **Preview Deployments**: Pull requests geram URLs de preview automáticas

Seu projeto está pronto para produção! Ele usa Next.js 15 com todas as melhores práticas e otimizações.