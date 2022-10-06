const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Winter is Coming!')
})

app.use('/api/login', require('./routes/login'));


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})