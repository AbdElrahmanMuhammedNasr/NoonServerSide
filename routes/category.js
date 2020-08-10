const router = require('express').Router();
const Category =require('../Models/Category');

router.get('/getCategory',(req, res, next)=>{
      // console.log(req.query.Type)
            Category.find().where('categoryType').equals(req.query.Type)
                .then(data=>{
                    if(data == null || data.length <=0 ){
                        res.status(200).json('noData')
                    }else {
                        res.status(200).json(data)

                    }
                })
                .catch(er => console.log(er.message))
});

router.post('/addNewCategory',(req, res, next)=>{
    const category = new Category({
        categoryType:req.body.categoryType,
        name:req.body.name,
        image:req.body.image
    });
    category.save()
        .then(
            res.status(200).json({
                message:"Done"
            })
        )
        .catch(error => console.log(error))
})

module.exports =router
