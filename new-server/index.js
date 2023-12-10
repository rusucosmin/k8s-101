const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/users', (req, res) => {
  res.send("We don't have any users yet")
})

app.listen(port, () => {
  console.log(`Other app listening on port ${port}`)
})