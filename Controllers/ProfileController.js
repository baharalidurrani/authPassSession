const UserModel = require('../Models/user');
exports.display = (req, res) => {

    res.render('Profile', {
        User: req.user
    });
}
exports.edit = (req, res) => {

    res.render('Edit', {
        User: req.user
    });
}
exports.update = (req, res) => {

    console.log(req.user._id);
    UserModel.findByIdAndUpdate(req.user._id, {
        Email: req.body.EMAIL,
        Name: req.body.NAME
    }).then((user) => {
        console.log(user);
    })
    res.send('updated');

}