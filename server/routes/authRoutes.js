const { signup,login } = require('../controllers/authController');

const router = require('express').Router(); 


// router.get('/hello', (req, res) => {
//     res.json({
//         message: 'Hello World',
//         name: "hi", 
//     })
//     // op: {"message":"Hello World","name":"hi"}
// })

router.get('/login', login); 
router.get('/hi', (req, res) => {
    res.send("hi")
}); 
router.post('/signup', signup); 

module.exports = router; 

 