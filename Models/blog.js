const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [String],
  category: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);