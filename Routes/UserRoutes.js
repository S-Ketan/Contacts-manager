const express = require('express');
const router = express.Router();
const {
  userRegister,
    userLogin,
    currentUser,
} = require('../Controllers/UserController');
const validateToken = require('../Middleware/ValidateTokenHandler');

router.post('/register',userRegister);
router.post('/login',userLogin);
router.get('/current',validateToken, currentUser);

module.exports = router;