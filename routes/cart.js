const router = require('express').Router();
const Cart = require('../Models/Cart');

router.get('/getCartsCount',(req, res, next)=>{
    Cart.find()
        .where('email')
        .equals(req.query.email)
        .count()
        .then(data=>{
            res.status(200).json(data)
        })
});

router.get('/getCarts',(req, res, next)=>{
    Cart.find()
        .where('email')
        .equals(req.query.email)
        .then(data=>{
            res.status(200).json(data)
        })
});

router.post('/addCart',(req , res, next)=>{
    const cart  = new Cart({
        email:req.body.email,
        productId:req.body.productId,
    });
    cart.save().then(data=>{
        res.status(200).json({
            message:'Done'
        })
    }).catch()
})

module.exports = router;
