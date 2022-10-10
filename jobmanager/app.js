const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

if (process.env.NODE_ENV === "production") {
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}
else {
  app.get('/', (req, res) => {
    res.send('Winter is Coming!')
  })
  app.use('/api/login', require('./server/routes/login'));
}

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})