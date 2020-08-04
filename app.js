const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/users');
const categoryRouter = require('./routes/category');
const shortCutProducts = require('./routes/ShortCutProducts');
const detailsProducts = require('./routes/detailsProduct');
const cart = require('./routes/cart');


const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/shortCutProducts', shortCutProducts);
app.use('/detailsProduct', detailsProducts);
app.use('/cart', cart);

app.listen(3000);
