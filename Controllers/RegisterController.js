const UserModel = require('../Models/user');
exports.get = (req, res) => {
    res.render('Register');
}
exports.post = (req, res) => {
    var user = new UserModel({

        Name: req.body.NAME,
        Email: req.body.EMAIL,
        Password: req.body.PASS,
        Gender: req.body.GENDER
    });

    user.save().then(() => res.redirect('/'))
        .catch((err) => res.redirect('/login'));

}