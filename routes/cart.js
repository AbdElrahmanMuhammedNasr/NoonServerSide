const router = require('express').Router();

router.get('/getCarts',(req, res, next)=>{
    res.status(200).json([
        { email:'abdo@abdo.com', productID:'1222f22fdfd5'}
    ])
})

module.exports = router;
