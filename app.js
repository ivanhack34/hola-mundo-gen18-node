const express = require('express')
// import express from 'express'

//const author = require('./package.json').repository.url
// import file from './package.json'

const port = 9000

const app = express()

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})
