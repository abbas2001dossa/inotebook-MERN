// importing db.js file in this ! 
const connectToMongo = require("./db");
const express = require('express')


// running the fucniton which imports the db.js file ! 
connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello my name is ABbas Dossa !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})