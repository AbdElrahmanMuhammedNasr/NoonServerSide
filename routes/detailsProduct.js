const router = require('express').Router();
router.get('/getProduct',(req, res, next)=>{
    res.status(200).json({
        id:"1",
        image:'https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475__340.jpg',
        type:'Laptop',
        modelNumber:'1120f1f',
        name:'Dell 3350 E',
        discount:10000,
        city :'Cairo',
        price:20000,
        deliverIn:'12 h',
        overview :[
            'Force Touch trackpad accounts for precise cursor control and pressure-sensing capabilities',
            'High‑performance processors with powerful integrated graphics offer blazing fast performance',
            'Secure Enclave coprocessor provides the foundation for secure boot and storage capabilities',
            'Power through your whole day with long hours of battery life',
            'Touch-pad with multi-touch gesture support. NOW'
        ]

    })
})
module.exports = router;
