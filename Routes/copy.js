const express = require('express');
const router = express.Router();
const {
  getBlogs,
  getBlogById,
  createBlog
} = require('../Controllers/blogController');

const { protect, creatorOnly } = require('../middleware/authMiddleware');

router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.post('/', protect, creatorOnly, createBlog);

module.exports = router;
