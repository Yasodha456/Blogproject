// const express = require('express');
// const connectDB = require('./db.js');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const app = require('./config');

// dotenv.config();
// const app = express();
// connectDB();

// app.use(cors());
// app.use(express.json());

// const blogRoutes = require('../Routes/copy');
// const authRoutes = require('../Routes/authCopy');

// app.use('/api/blogs', blogRoutes);
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./Config/db'); 

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Import routes
const blogRoutes = require('./Routes/copy');
const authRoutes = require('./Routes/authCopy');

app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
