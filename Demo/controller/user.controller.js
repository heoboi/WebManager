const shortid = require('shortid');

const db = require('../db');

module.exports.index = function(req, res) 
{
    res.render('users/index', 
    {
        users: db.get('users').value()
    });
};

module.exports.search = function(req, res) 
{
    
    var q = req.query.q;
    var matchedUsers = db.get('users').value().filter(function(user1){
        console.log("Hello  "+ q);
       return user1.name.toLowerCase().indexOf(q.toLowerCase()) !== -1; // Nếu q năm trong string name => sẽ trả về 1 giá trị > - 1
                                    // nếu k thuôc => - 1
    });
    res.render('users/index', {
        users: matchedUsers
    });
};

module.exports.get = function (req,res) { // 
    //Mỗi lần chạy users/tham số thì sẽ tự động đến trang này, và lưu nó vào 1 biến gọi là id
    var id = parseInt(req.params.id); // Khác với req.query (sau ?)
    var user = db.get('users').find({ id: id }).value();
    res.render('users/view', {
        user: user
    });
};

module.exports.create = function(req,res){
    res.render('users/create');
};

module.exports.postCreate = function(req,res){
    req.body.id = shortid.generate();
    var errors = [];
    if(!req.body.name)
    {
        errors.push('Name is required.');
    }
    if(!req.body.phone) 
    {
        errors.push('Phone is required');
    }
    if (errors.length)
    {
        //false => Không lưu lại
        res.render('users/create', {
            errors: errors ,
            values: req.body
        });
        return ;
    }
    db.get('users').push(req.body).write();
   // users.push(req.body); // thêm dữ liệu đã nhập vào Memmory => nhưng khi tắt server mở lại thì sẽ mất
    res.redirect('/users/'); // tự động gửi request quay lại trang user
}