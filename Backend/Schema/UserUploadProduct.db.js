import mongoose, { Schema } from 'mongoose';

const ProductDetails = new mongoose.Schema({
    CategoryID: [
        {
            type: Schema.Types.ObjectId, ref: 'Category'
        }
    ],
    ProductName: String,
    price: Number,
    Description: String,
    Status: String,
    CustomerID: [{
        type: Schema.Types.ObjectId, ref: 'RegisterUser'

    }]
});

module.exports = mongoose.model('ProductDetails', ProductDetails);