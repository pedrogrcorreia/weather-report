const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory
app.use(express.static(publicPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Pedro Correia'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Pedro Correia'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Pedro Correia'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Weather forecast',
        location: 'Coimbra',
    })
})

app.get('*', (req, res) => {
    res.send("404: Page not found!")
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})