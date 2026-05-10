const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const port = process.env.PORT || 3000
const publicDir = __dirname

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url)
  let pathname = parsedUrl.pathname || '/'

  if (pathname === '/' || pathname === '/inicio') {
    pathname = '/inicio.html'
  } else if (pathname === '/sobre') {
    pathname = '/sobre.html'
  }

  const safePath = path.normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '')
  const filePath = path.join(publicDir, safePath)

  if (!filePath.startsWith(publicDir)) {
    return send404()
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      return send404()
    }

    const ext = path.extname(filePath).toLowerCase()
    const contentType = mimeTypes[ext] || 'application/octet-stream'

    res.writeHead(200, { 'Content-Type': contentType })
    fs.createReadStream(filePath).pipe(res)
  })

  function send404() {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 Not Found')
  }
})

const { exec } = require('child_process')

server.listen(port, () => {
  const url = `http://localhost:${port}`
  console.log(`Servidor rodando em ${url}`)

  const startCommand = process.platform === 'win32'
    ? `start "" chrome "${url}"`
    : process.platform === 'darwin'
      ? `open "${url}"`
      : `xdg-open "${url}"`

  exec(startCommand, err => {
    if (err) {
      console.error('Erro ao abrir o navegador automaticamente:', err)
    }
  })
})
