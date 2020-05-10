const express = require('express');

const router = express.Router();
const controller = require('../controller/user.controller');
const validate = require('../validate/user.validate');
// File này chỉ định nghĩa các đường dẫn => điều hướng thôi
// Còn những tác vụ, các hàm => thực hiện ở controller 

router.get('/', controller.index);
router.get('/cookie', function(req,res,next)
{
    res.cookie('user-id', 12345);
    res.send('Hello baby');
});
router.get('/search', controller.search);
router.get('/create', controller.create);
// Dynamic Routing
router.get('/:id', controller.get);
router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;