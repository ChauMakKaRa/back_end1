const express = require('express');
const cors = require('cors');
const contactsRouter = require("./app/routes/route");
const app = express();


app.use(cors()) ;
app.use(express.json());



app.get('/', function (req, res) {
  res.json({message: " Welcome to contact book applications!!"});
})
app.use("/api/contacts", contactsRouter);
module.exports = app;
