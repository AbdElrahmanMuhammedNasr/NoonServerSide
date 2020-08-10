const router = require('express').Router();
const Cart = require('../Models/Cart');
const DetailsProduct = require('../Models/DetailsProduct');

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
    // console.log(req.query.email);
    Cart.find()
        .where('email')
        .equals(req.query.email)
        .then(data=>{
            data.map(e=>{
                DetailsProduct.where('productId').equals(e.productId)
                    .then(newData=>{
                        console.log(newData);
                        res.json(newData);
                    })
                    .catch()
            })
            // res.status(200).json(data)
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
