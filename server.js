const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const timestamp = require("./utils.js")

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())


app.get('/:date', (req, res) => {
   let date = req.params.date
   res.json(timestamp(date))
})

app.listen(process.env.PORT)