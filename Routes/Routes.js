const express = require('express');
const Router = express.Router();
const Login = require('../Controllers/LoginController');
const Register = require('../Controllers/RegisterController');
const Home = require('../Controllers/HomeController');
const profile = require('../Controllers/ProfileController');
const passport = require('passport');
const auth = require('../Middleware/passport_auth');

module.exports = Router;

//Home route
Router.get('/', Home);

//Login Route
Router.get('/login', auth.restric, Login.get);
Router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));
//Register route

Router.get('/register', auth.restric, Register.get);
Router.post('/register', Register.post);

Router.get('/profile', auth.islogin, profile.display);
Router.get('/logout', require('../Controllers/LogoutController'));

Router.get('/edit', auth.islogin, profile.edit);
Router.post('/edit', auth.islogin, profile.update);