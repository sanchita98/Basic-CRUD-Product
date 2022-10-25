const Product = require("../model/product.model")

exports.addProduct= (req, res)=> {
     ProductData = new Product (req.body)
     ProductData.save()
        .then((resData)=> {
            res.jsonp({
                message : "product added successfully",
                status: true,
                result: resData
            })
        })
        .catch((err)=> {
            res.jsonp({
                message : "something went wrong",
                status: false,
            })
        })
}

exports.getProduct = (req, res)=> {
     Product.find()
        .then((resData)=> {
            res.jsonp({
                message : "product get successfully",
                status: true,
                result: resData
            })
        })
        .catch((err)=> {
            res.jsonp({
                message : "something went wrong",
                status: false,
            })
        })
}

exports.findProductById = (req, res)=> {
    Product.findByIdAndUpdate({_id: req.body.nameId}, req.body)
    .then((resData)=> {
        res.jsonp({
            message : "product updated successfully",
            status: true,
            result: resData
        })
    })
    .catch((err)=> {
        res.jsonp({
            message : "something went wrong",
            status: false,
        })
    })
}

exports.findProductById = (req, res)=> {
     Product.findByIdAndDelete({_id : req.body.nameId}, req.body)
     .then((resData)=> {
        res.jsonp({
            message : "product deleted successfully",
            status: true,
        })
    })
    .catch((err)=> {
        res.jsonp({
            message : "something went wrong",
            status: false,
        })
    })
}

exports.findProductById = (req, res)=> {
    Product.findOne({_id : req.body.nameId})
    .then((resData)=> {
        res.jsonp({
            message : "product get By Id successfully",
            status: true,
            result: resData
        })
    })
    .catch((err)=> {
        res.jsonp({
            message : "something went wrong",
            status: false,
        })
    })
}