const express = require('express')
// import express from 'express'

//const author = require('./package.json').repository.url
// import file from './package.json'

const port = 9000

const app = express()

app.get('/hola', (peticion, respuesta) => {
    respuesta.json({
        message: 'Hola mundo'
    })
})

app.delete('/hola', (peticion, respuesta) => {
    respuesta.json({
        message: 'Hola pero desde delete'
    })
})


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})
