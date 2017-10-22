var express = require('express');
var passport = require('passport');
var router = express.Router();
var PictureHandler = require('../app/controllers/pictureHandler.server');
var pictureHandler = new PictureHandler();

//home page
router.get('/', pictureHandler.getAllPics, function(req, res) {
    res.render('index', {user: req.user, message: req.flash('message')});
});

//myPics
router.get('/myPics', isLoggedIn, pictureHandler.getUserPics, function(req, res) {
    res.render('userPics', {user: req.user});
});
//random user Pics
router.get('/userPage/:individualId', pictureHandler.getIndividualPics, function(req, res) {
    res.render('userPage', {user: req.user});
});

//Flash
router.get('/flash', function(req, res){
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('message', 'You have to be logged in');
    res.redirect('/');
});

//allUsers
router.get('/allUsers', pictureHandler.getAllUsers, function(req, res) {
    res.render('allUsers', {user: req.user});
});

//add a picture
router.post('/addPic', isLoggedIn, pictureHandler.addPic);

//remove a picture
router.get('/removePic/:picId', isLoggedIn, pictureHandler.removePic);

//like a picture
router.get('/likePic/:picId', isLoggedIn, pictureHandler.likePic);

//like a picture
router.get('/dislikePic/:picId', isLoggedIn, pictureHandler.dislikePic);

//logout
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

//authentications for facebook, twitter and google.
// Facebook routes
router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/myPics',
    failureRedirect: '/'
}));

// Twitter routes
router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/myPics',
    failureRedirect: '/'
}));

// Google routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/myPics',
    failureRedirect: '/'
}));

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/flash');
}
