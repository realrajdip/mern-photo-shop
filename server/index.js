const express = require('express'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; 

app.get('/', (req, res) => {
    res.send("<center><h1>Nice</h1></center>")
})

app.listen(PORT, () => {
    console.log(`Server listening to port: ${PORT}`);
})