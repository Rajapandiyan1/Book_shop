const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/Book_Shop';

// Connect to MongoDB
mongoose.connect(mongoURI);

// Get the default connection
const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
const bookSchema = new mongoose.Schema({
    bookName: { type: String },
    price: { type: Number },
    description: { type: String },
    quantity: { type: Number },
    image: { type: String },
    author: { type: String }
  });
  const orderSchema = new mongoose.Schema({
    "Book_name": String,
    "book_id":String,
    "price" :Number,
    "quantity":Number,
    "name":String,
    "email":String,
    "address":String,
    "mobile":String,
  });
  
  // Create the book model
  const book_details = mongoose.model('book_details', bookSchema);
  const order_details = mongoose.model('order_details', orderSchema);

  
  // Export the model
  module.exports = {book_details,order_details};