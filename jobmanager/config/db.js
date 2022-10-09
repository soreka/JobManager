const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose
    .connect(
      process.env.MONGODB_URI || 'mongodb://localhost/elevationJobManager',
      { useUnifiedTopology: true, useNewUrlParser: true }
    )
    .then((conn) => {
      console.log(`MongoDB connected: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.error(`Error ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDB;
