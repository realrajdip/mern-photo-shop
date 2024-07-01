const router = require('express').Router(); 


router.get('/hello', (req, res) => {
    res.json({
        message: 'Hello World',
        name: "hi", 
    })
    // op: {"message":"Hello World","name":"hi"}
})

module.exports = router; 

 