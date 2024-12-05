const express = require('express');
const { CreateUser } = require('../controllers/user.controller');
const upload = require('../middleware/multer');
router.get('/create-user', upload.single('file'), 'CreateUser');

module.exports= router;