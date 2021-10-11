const json = require("../assets/products.json");
const getProducts = (req, res) => {
    res.json( json);
}
module.exports = {
    getProducts
}