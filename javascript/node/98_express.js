const express = require('express')
const app = express()
const port = 3000
const path=require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/about', (req, res) => {
  res.send('about')
})
app.get('/contact', (req, res) => {
  res.send('contact')
})
app.get('/map', (req, res) => {
  res.send('map')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
