const express = require("express");
require("dotenv").config();
const authRoute = require("./routes/authRoutes");
const { readdirSync } = require("fs");
const app = express();
const PORT = process.env.PORT || 5000;
const { connectDb } =  require("./connection.js");
const cors = require('cors'); 

connectDb();

app.use(express.json()); 
app.use(cors()); 

app.get("/", (req, res) => {
  res.send("<center><h1>Nice</h1></center>");
});
// app.use('/api', authRoute)
// console.log(readdirSync('./routes/')); // [ 'authRoutes.js' ]

readdirSync("./routes/").map((route) => 
   app.use("/api", require(`./routes/${route}`))
);

app.listen(PORT, () => {
  console.log(`Server listening to port: ${PORT}`);
});
