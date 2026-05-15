# Velattus Site

Site simples com as seguintes páginas e arquivos:

- `inicio.html` — página inicial
- `sobre.html` — página sobre
- `style.css` — estilos do site
- `script.js` — scripts do site

Este repositório foi criado localmente e enviado para GitHub.

## Como visualizar

### Opção rápida
```powershell
npm start
```

Isso instala dependências e abre o site automaticamente no Chrome.

### Opção manual
1. Abra `inicio.html` no navegador.
2. Edite os arquivos conforme necessário.

## Como executar localmente

### Opção 1: usar npm (recomendado)

No terminal, dentro da pasta do projeto:

```powershell
npm install
npm start
```

Isso inicia o servidor e abre automaticamente no Chrome em `http://localhost:3000`.

### Opção 2: usar o Node direto

Se `npm` não for reconhecido:

```powershell
.\run.cmd
```

Depois abra `http://localhost:3000` no navegador.

## GitHub

Repositório remoto: `https://github.com/raynarasousa/velattus-site2`

## Deploy no Render

1. Faça commit e push do projeto para o GitHub.
2. No Render, crie um novo Web Service.
3. Conecte ao repositório `raynarasousa/velattus-site2`.
4. Use as seguintes configurações:
   - Environment: `Node`
   - Build command: `npm install`
   - Start command: `npm start`
5. O Render irá usar o `render.yaml` do repositório para detectar a aplicação.

> Se o branch principal for `main`, escolha esse branch. Se for `master`, ajuste no painel do Render.
