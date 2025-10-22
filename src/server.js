import http from 'node:http'

const tasks = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  console.log(method, url)

  if(method === 'GET' && url === '/tasks') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(tasks))
  }

  if(method === 'POST' && url === '/tasks') {
    tasks.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    })

    return res.end('Criação de Tarefas')
  }
  
  return res.end('Hello World')
})

server.listen(3333)