const router = require('express').Router();
const DetailsProduct = require('../Models/DetailsProduct');

router.post('/addProductDetails',(req, res, next)=>{
    const detailsProduct = new DetailsProduct({
        productId:req.body.productId,
        productsType : req.body.productsType,
        image : req.body.image,
        modelNumber : req.body.modelNumber,
        discount : req.body.discount,
        city : req.body.city,
        price : req.body.price,
        deliverIn: req.body.deliverIn,
        dis : req.body.dis,
        express : req.body.express,
        overview: req.body.overview,
        guarantee : req.body.guarantee,
    });
    detailsProduct.save()
        .then(data=>{
            res.json({
                message:"Done"
            })
        })
        .catch()
})
router.get('/getProduct',(req, res, next)=>{
    console.log(req.query.ID)
    // 5f2a6d55d2425021c0aec167
    // 5f2a6c760839e91eaaa6dcb3
    DetailsProduct.where('productId').equals(req.query.ID)
        .then(data=>{
            console.log(data);
            res.json(data);
        })
        .catch()

})
module.exports = router;
