import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://myUser:myPassword@127.0.0.1:27017/demo3648?authSource=demo3648', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);  // Dừng ứng dụng nếu không thể kết nối.
  }
};

export { connectDB };
