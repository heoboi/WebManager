const express = require('express');

const router = express.Router();
const controller = require('../controller/user.controller');
// File này chỉ định nghĩa các đường dẫn => điều hướng thôi
// Còn những tác vụ, các hàm => thực hiện ở controller 

router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/create', controller.create);
// Dynamic Routing
router.get('/:id', controller.get);
router.post('/create', controller.postCreate);

module.exports = router;