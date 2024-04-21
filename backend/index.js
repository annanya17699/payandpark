const express = require('express')
const connectToMongoose = require('./db');

require('dotenv').config({ path: './.env'})

connectToMongoose();

const app = express()
const port = process.env.PORT;

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})