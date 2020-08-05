const router = require('express').Router();
const bcrypt = require('bcryptjs');
const express = require('express');

const UserData = require('../Models/UserDate');
const LoginData = require('../Models/Login');


router.get('/getLogin', (req, res, next)=> {
    LoginData.findOne({email: req.body.email})
        .then(data=>{
            res.status(200).json({
                message:"Found"
            })
        .catch(
            res.status(200).json({
                message:"Not Found"
            })
        )
    })
;
});

router.post ('/addLogin', async (req, res, next)=>  {
    try{
        const userData = await LoginData.findOne({email: req.body.email})
        if(userData){
            res.status(403);
        }else {
            const hashPass = await bcrypt.hash(req.body.password ,12);
            const loginData = new LoginData({
                email: req.body.email,
                password: hashPass,
            });
            await loginData.save();

        }
    }catch (error){
        console.log(error.message)
    }


});

/***************************************************************************************/

router.post('/signup',(req, res, next)=>{
  const userData =new UserData({
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
  })
  userData.save().then(
      res.status(200).json({
        message:"SignUp"
      })
  ).catch();

})

module.exports = router;
