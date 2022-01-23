// import express from 'express';

const express = require('express')
const router = require('./router')
const app = express()
const port = 3000

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)
app.use(router)
app.listen(port, () => {
  console.log('Run in localhost:${port}')
})