const { Router } = require('express');

const productController = require('../controllers/productController/productController');

function pharmaRouter() {
  const router = Router();

  router
    .route('/')
    .post(productController.createProduct)
    .get(productController.getProducts)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);

  router
    .route('/:productId')
    .get(productController.getProduct)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);

  return router;
}

module.exports = pharmaRouter();
