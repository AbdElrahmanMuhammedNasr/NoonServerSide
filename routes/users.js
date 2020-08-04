const router = require('express').Router();


router.get('/login', (req, res, next)=> {
  res.status(200).json({
    message:"login"
  });
});

router.post('/signup',(req, res, next)=>{
  res.status(200).json({
    message:"SignUp"
  });
})

module.exports = router;
