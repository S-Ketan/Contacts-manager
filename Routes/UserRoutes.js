const express = require('express');
const router = express.Router();
const {
  userRegister,
    userLogin,
    currentUser,
} = require('../Controllers/UserController');

router.post('/register',userRegister);
router.post('/login',userLogin);
router.get('/current',currentUser);

module.exports = router;