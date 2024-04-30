import mongoose from 'mongoose';

var CategoryTlkp = new Schema({
    name: String
});

module.exports = mongoose.model('Category', CategoryTlkp);