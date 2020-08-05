const router = require('express').Router();
const ShortCutProduct = require('../Models/ShortCutProduct');


router.post('/addProductsShortCut',(req, res,next)=>{
        const  shortCutproduct = new ShortCutProduct({
            productsType:req.body.productsType,
            image:req.body.image,
            dis:req.body.dis,
            price:req.body.price,
            discount:req.body.discount,
            express:req.body.express,

        });
        shortCutproduct.save()
            .then(data=>{
                res.status(200).json({
                    message:"DONE"
                });
            })
            .catch()
});

router.get('/getProductsShortCut',(req , res, next)=>{
    console.log(req.query.Type);

    ShortCutProduct.find()
        .where('productsType').equals(req.query.Type)
        .then(data=>{
            res.status(200).json(data);
        })
        .catch()
})

module.exports = router
