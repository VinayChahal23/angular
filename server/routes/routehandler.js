const express = require('express');
const router = express.Router();
const {getProducts} = require('../controllers/product-controller')

//json from json file not in controller -done
//add api/products - done
//simplify syntax
//reanme products.js to product-controller.js -done
// only image name in path.. rest upto frontend -done
//router.route('/api/products').get(getProducts)
router.get('/api/products', getProducts)
module.exports = router