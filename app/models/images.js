'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Image = new Schema({
    link: String,
    description: String,
    userId: String,
    username: String,
    likes: Array
});

module.exports = mongoose.model('Image', Image);