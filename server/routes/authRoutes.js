const { signup,login } = require('../controllers/authController');

const router = require('express').Router(); 


// router.get('/hello', (req, res) => {
//     res.json({
//         message: 'Hello World',
//         name: "hi", 
//     })
//     // op: {"message":"Hello World","name":"hi"}
// })

router.post('/login', login); 
router.post('/signup', signup); 

module.exports = router; 

 