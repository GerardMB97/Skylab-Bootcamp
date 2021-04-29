const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require('./productController');
const Product = require('../../models/productModel');

jest.mock('../../models/productModel');

describe('Given a productController object containing methods', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
    req = {
      params: {}
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createProduct', () => {
    test('Should invoke res.json if there is no error', () => {
      createProduct(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('getProducts', () => {
    test('Should invoke res.json if there is no error', async () => {
      await getProducts(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Should invoke res.status with 500 if there is an error', () => {
      Product.find.mockImplementationOnce(() => { throw new Error(); });
      getProducts(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('getProduct', () => {
    test('Should invoke res.json if there is no error', async () => {
      await getProduct(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Should invoke res.status with 500 if there is an error', () => {
      Product.findById.mockImplementationOnce(() => { throw new Error(); });
      getProduct(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('updateProduct', () => {
    [1, null].forEach((value) => {
      test('Should invoke res.json if there is no error', async () => {
        const specificReq = {
          params: { productId: value },
          body: 1
        };
        await updateProduct(specificReq, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    test('Should invoke res.status with 500 if there is an error', () => {
      const specificReq = {
        params: { productId: 15 }
      };
      Product.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error(); });

      updateProduct(specificReq, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('deleteProduct', () => {
    [1, null].forEach((value) => {
      test('Should invoke res.json if there is no error', async () => {
        const specificReq = {
          params: { productId: value },
          body: 1
        };
        await deleteProduct(specificReq, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    test('Should invoke res.status with 500 if there is an error', () => {
      const specificReq = {
        params: { productId: 15 }

      };
      Product.findByIdAndDelete.mockImplementationOnce(() => { throw new Error(); });
      deleteProduct(specificReq, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
