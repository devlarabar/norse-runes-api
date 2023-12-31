const express = require('express')
const app = express()
const divination = require('./public/data')
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))

const PORT = 8000

// Create the server and listen on port 8000
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}.`)
})

// Display index.html on the home page
app.get('/', (req, res) => {
    let rune1 = divination.runes[2]
    let rune2 = divination.runes[5]
    let rune3 = divination.runes[12]
    let rune4 = divination.runes[18]
    let rune5 = divination.runes[21]
    res.render('index.ejs', { rune1: rune1, rune2: rune2, rune3: rune3, rune4: rune4, rune5: rune5 })
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

// Draw runes without a specific spread
app.get('/api/draw', (req, res) => {
    const amount = req.query.amount && req.query.amount <= divination.runes.length ? req.query.amount : 1

    let runes = drawRunes(amount)
    let draw = divination.runes.filter((x, i) => runes.includes(i))

    res.json(draw)
})


// Draw runes in a spread
app.get('/api/spread', (req, res) => {
    const spread = req.query.spread
    if (spread) {
        if (spread == 'threeruneguidance') {
            let runes = drawRunes(3)
            let runeSpread = {
                'current situation': getRune(runes[0]),
                'obstacle': getRune(runes[1]),
                'guidance': getRune(runes[2])
            }
            res.json(runeSpread)
        }
        if (spread == 'threerunetimeline') {
            let runes = drawRunes(3)
            let runeSpread = {
                'past': getRune(runes[0]),
                'present': getRune(runes[1]),
                'future': getRune(runes[2])
            }
            res.json(runeSpread)
        }
        if (spread == 'fourelements') {
            let runes = drawRunes(4)
            let runeSpread = {
                'earth': getRune(runes[0]),
                'air': getRune(runes[1]),
                'fire': getRune(runes[2]),
                'water': getRune(runes[3])
            }
            res.json(runeSpread)
        }
    } else {
        res.status(404).json(divination.errors[404]).end()
    }
    
})


// Utility functions

// Draw runes without duplication
function drawRunes(amount) {
    let runes = []
    for (let i = 0; i < amount; i++) {
        let rng = Math.floor(Math.random()*(divination.runes.length))
        while (runes.includes(rng)) {
            rng = Math.floor(Math.random()*(divination.runes.length))
        }

        runes.push(rng)
    }
    return runes
}

// Get rune info from index
function getRune(index) {
    let rune = divination.runes.filter((x, i) => i == index)[0]
    rune.position = isReversed()
    return rune
}

// Check if rune is reversed
function isReversed() {
    const reversed = Math.floor(Math.random()*2) == 0 ? true : false
    return reversed == true ? 'reversed' : 'upright'
}