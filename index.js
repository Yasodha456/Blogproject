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

const blogRoutes = require('./Routes/copy');
const authRoutes = require('./Routes/authCopy');

app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
