const Product = require('../models/product.model')

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newproduct) => {
                res.json(newproduct)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProduct) => {
                res.json(allProduct)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    getOneProduct: (req, res) => {
        const id = req.params.id
        Product.findById(id)
            .then((oneProduct) => {
                res.status(200).json(oneProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true, runValidators: true
            })
            .then((updatedJoke) => {
                res.json(updatedJoke)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }
}
