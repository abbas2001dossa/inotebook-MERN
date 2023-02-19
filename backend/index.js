// importing db.js file in this ! 
const connectToMongo = require("./db");
const express = require('express')


// running the fucniton which imports the db.js file ! 
connectToMongo();

const app = express()
const port = 3000

// Availalble Routes 
// professionally handling hte routes ! 
app.use('/api/auth' , require('./routes/auth'));
app.use('/api/notes' , require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})