const express = require('express')
const app = express()

const postsRouter = require('./posts/posts.router')

const db = require('./utils/database')
const config = require('./config')
const { port, host } = config.api

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('Connection with database was established successfully')
    })
    .catch((err) => {
        console.log('Error connecting with database: ', err)
    })

db.sync()
    .then(() => {
        console.log('The database was successfully synced')
    })
    .catch((err) => {
        console.log('Error syncing the database: ', err)
    })

app.use('/api/v1', postsRouter)

app.listen(port, () => {
    console.log(`Server running on: ${host}:${port}`)
})

module.exports = app
