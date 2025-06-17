const Blog = require('../Models/blog');

exports.getBlogs = async (req, res) => {
  const { page = 1, limit = 6, sortBy } = req.query;
  const sortOptions = sortBy === 'trending' ? { views: -1, likes: -1 } : { createdAt: -1 };

  try {
    const blogs = await Blog.find()
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'name');
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    blog.views += 1;
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({ ...req.body, author: req.user.id });
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Blog creation failed', error: err });
  }
};

