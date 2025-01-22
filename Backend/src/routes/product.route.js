const multer = require('multer');
const express = require('express');
const verifyUser = require('../middleware/jwt-verify.js');

const {
  createProductController,
  getProductDataController,
  updateProductController,
  getSingleProductDocumentController,
  deleteSingleProduct,
} = require('../controllers/product.controller.js');

const router = express.Router();

const fs = require('fs');
const path = require('path');

// Ensure the uploads folder exists
const uploadDir = path.join(__dirname, '../temp-uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const upload = multer({ dest: uploadDir });

// Routes
router.post(
  '/create-product',
  [upload.array('files', 5), verifyUser],
  createProductController
);
router.get('/get-products', getProductDataController);
router.get('/get-single/:id', getSingleProductDocumentController);
router.put('/update-products/:id', upload.array('files', 5), updateProductController);
router.delete('/:id', deleteSingleProduct);

module.exports = router;