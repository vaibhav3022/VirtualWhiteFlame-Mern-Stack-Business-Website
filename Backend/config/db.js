const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }

    // Mask password for logging
    const maskedUri = uri.replace(/:([^@]+)@/, ':****@');
    console.log(`Attempting to connect to MongoDB: ${maskedUri}`);

    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    if (err.message.includes('ECONNREFUSED')) {
      console.error('💡 Tip: This is often a DNS resolution issue. Ensure your network allows SRV lookups or try the standard connection string format in MongoDB Atlas.');
    }
    process.exit(1);
  }
};

module.exports = connectDB;
