const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db_url = process.env.MONGODB_URL;
    await mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
    console.log(mongoose.connect(db_url));
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};
// connectDB()
module.exports = connectDB;
