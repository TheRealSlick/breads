// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine')
app.use(express.static('public'))
app.engine('jsx', require('express-react-views').createEngine())


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// Breads
const breadsController = require('./controllers/bread_controller')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
