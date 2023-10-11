const express = require('express')
const app = express()
const app2 = express()
const port = 3000
const port2 = 49155

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('This is a test')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app2.get('/', (req, res) => {
  res.send('Hello World again!')
})

app2.get('/test', (req, res) => {
  res.send('This is another test')
})

app2.listen(port2, () => {
  console.log(`Second example listening at http://localhost:${port2}`)
})
