const express = require('express')
const app = express()

//public zugreifen.!!
app.use(express.static('public'))

//import json from
const enemies = require('./data/enimies.json')
console.log(enemies)

//server

console.log(__dirname)
app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})
app.get('/about', (req, res) => {
  res.sendFile('views/about.html', { root: __dirname })
})
app.get('/work', (req, res) => {
  res.sendFile('views/work.html', { root: __dirname })
})

//work with json
app.get('/enemies', (req, res) => {
  res.json(enemies)
})
// muss unten stehen!!!
app.listen(3000, () => {
  console.log('watching Port')
})
