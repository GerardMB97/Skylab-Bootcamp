const Product = require('../../models/productModel');
require('../../models/categoryModel');

function productController() {
  const getProducts = async (req, res) => {
    const query = {};

    try {
      const products = await Product.find(query).populate('category');
      res.json(products);
    } catch (error) {
      res.status(500);
      res.send('There was an error loading the products');
    }
  };

  const createProduct = (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save();

    res.json(newProduct);
  };

  const getProduct = async (req, res) => {
    const { productId } = req.params;

    try {
      const product = await Product.findById(productId);
      res.json(product);
    } catch (error) {
      res.status(500);
      res.send('The item you were looking for could not be retrieved');
    }
  };

  const updateProduct = async (req, res) => {
    const id = req.params.productId || req.body._id;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedProduct);
    } catch (error) {
      res.status(500);
      res.send('There was an error updating your product');
    }
  };

  const deleteProduct = async (req, res) => {
    const id = req.params.productId || req.body._id;
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      res.json(deletedProduct);
    } catch (error) {
      res.status(500);
      res.send('There was an error deleting the product');
    }
  };
  return {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
  };
}

module.exports = productController();
