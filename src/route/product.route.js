const router = require("express").Router();

const productController = require("../controller/product.controller");

router.post("/add", productController.addProduct);
router.get("/find", productController.getProduct);
router.put("/update", productController.findProductById)
router.delete("/delete", productController.findProductById)
router.post("/getById", productController.findProductById)

module.exports = router;
