const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
    app.post('/api/newProduct', ProductController.createProduct)
    app.get('/api/allProduct', ProductController.getAllProducts)
    app.get('/api/oneProduct/:id', ProductController.getOneProduct)
    app.put('/api/edit/:id', ProductController.updateProduct)
    app.delete('/api/delete/:id', ProductController.deleteProduct)
}