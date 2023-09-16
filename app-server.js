const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon');
app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.static('public'))

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

module.exports = app