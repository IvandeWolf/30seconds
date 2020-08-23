/**
 * The backend for the 30 seconds app.
 */
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000

app.use(cors())
/* parse application/json */
app.use(bodyParser.json())
/* parse application/x-www-form-urlencoded */
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.post('/add', (req, res) => {
  const words = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/words.json'), 'utf8')
  )
  words.push(req.body.value)

  fs.writeFileSync(path.join(__dirname, '/words.json'), JSON.stringify(words))

  res.json({
    msg: 'success'
  })
})

app.get('/words', (req, res) => {
  const words = fs.readFileSync(path.join(__dirname, '/words.json'), 'utf8')
  res.json(JSON.parse(words))
})

app.listen(port)
