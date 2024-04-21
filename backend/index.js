const express = require('express')
const connectToMongoose = require('./db');

require('dotenv').config()

connectToMongoose();

const app = express()
const port = process.env.PORT;

app.use(express.json());

app.use('/api/auth', require('./routes/auth/login'));
app.use('/api/otp', require('./routes/auth/otp'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})