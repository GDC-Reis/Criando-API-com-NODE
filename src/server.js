import http from 'node:http'

const server = http.createServer((req, res) => {
  const { method, url } = req

  console.log(method, url)

  if(method === 'GET' && url === '/tasks') {
    return res.end('Listagem de tarefas')
  }

  if(method === 'POST' && url === '/tasks') {
    return res.end('Criação de Tarefas')
  }
  
  return res.end('Hello World')
})

server.listen(3333)