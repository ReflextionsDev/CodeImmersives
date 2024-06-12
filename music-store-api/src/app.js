const express = require('express')

const app = express()
const port = 3017

app.use((req, res, next) => {
    console.log('Hello there')
    next()
})

app.use((req, res, next) => {
    console.log('second middleware')
    next()
})


app.use((req, res) => {
    console.log('third middleware')
})