const router = require('express').Router();

router.get('/getcategory',(req, res, next)=>{
        res.status(200).json([
            {id:'1',id:'1',category:'Labtop', image:"https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"},
            {id:'2',category:'camera', image:"https://cdn.pixabay.com/photo/2016/03/07/00/01/photo-camera-1241441_960_720.jpg"},
            {id:'3',category:'printer', image:"https://cdn.pixabay.com/photo/2015/05/30/15/45/printer-790396_960_720.jpg"},
            {id:'4',category:'playStation', image:"https://cdn.pixabay.com/photo/2017/05/19/14/05/ps4-2326600_960_720.jpg"},
            {id:'5',category:'Gaming', image:"https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"},
            {id:'6',category:'Xbox', image:"https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"},
            {id:'7',category:'Monitors', image:"https://cdn.pixabay.com/photo/2015/03/26/10/36/apple-691633__340.jpg"},
            {id:'8',category:'NetWorking', image:"https://cdn.pixabay.com/photo/2017/04/04/17/22/netgear-2202273_960_720.jpg"},
            {id:'9',category:'Storage', image:"https://cdn.pixabay.com/photo/2017/08/07/19/32/computer-2607018_960_720.jpg"},
            {id:'10',category:'HeadPhone', image:"https://cdn.pixabay.com/photo/2016/11/18/22/20/headphones-1837146_960_720.jpg"},
            {id:'11',category:'Accessories', image:"https://cdn.pixabay.com/photo/2016/02/19/10/00/laptop-1209008_960_720.jpg"},
        ])
})

module.exports =router
