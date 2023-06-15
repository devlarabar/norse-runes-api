const express = require('express')
const app = express()
const divination = require('./public/data')
const cors = require('cors')

app.use(cors())    

const PORT = 8000

// Create the server and listen on port 8000
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}.`)
})

// Display index.html on the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Display all API data
app.get('/api', (req, res) => {
    res.json(divination)
})

// Search for a specific rune
app.get('/api/find', (req, res) => {
    const runeName = req.query.rune.toLowerCase()

    // Retrieve the rune if it exists
    if (runeName.toLowerCase() == 'random') {
        let rng = Math.floor(Math.random()*(divination.runes.length))
        res.json(divination.runes[rng])
        console.log(rng)
    } else if (divination.runes.find(x => x.rune.toLowerCase() == runeName) != undefined) {
        res.json(divination.runes.find(x => x.rune.toLowerCase() == runeName))
    } else {
        res.status(404).json(divination.errors[404]).end()
    }
})

// Draw runes
app.get('/api/draw', (req, res) => {
    const amount = req.query.amount && req.query.amount <= divination.runes.length ? req.query.amount : 1

    let runes = []
    for (let i = 0; i < amount; i++) {
        let rng = Math.floor(Math.random()*(divination.runes.length))
        while (runes.includes(rng)) {
            rng = Math.floor(Math.random()*(divination.runes.length))
        }
        runes.push(rng)
    }
    let draw = divination.runes.filter((x, i) => runes.includes(i))

    res.json(draw)
})

// Get CSS files
app.get('/css/reset.css', (req, res) => {
    res.sendFile(__dirname + '/css/reset.css')
})

app.get('/css/style.css', (req, res) => {
    res.sendFile(__dirname + '/css/style.css')
})