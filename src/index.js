import express from 'express'

const app = express()

console.log(process.env.DATABASE_URL)

app.listen(5000, () => {
    console.log('server is up')
})