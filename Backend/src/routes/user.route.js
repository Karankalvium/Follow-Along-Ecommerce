const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'temp-uploads/' });
const {
  CreateUSer,
  verifyUserController,
  signup,
  login,
  getUserData,
  AddAddressController,
  GetAddressConroller
} = require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const verifyUser = require('../middleware/jwt-verify.js');
const router = express.Router();

router.post('/create-user', upload.single('file'), CreateUSer);
router.get('/activation/:token', verifyUserController);

router.post('/signup',upload.single("file"), signup);
router.post('/login', login);
router.get('/user-data', verifyUser, getUserData);

router.post('/add-address' , verifyUser, AddAddressController);
router.get('/get-addresses', verifyUser, GetAddressConroller);

module.exports = router;