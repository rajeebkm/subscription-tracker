import mongoose from 'mongoose';
import { MONGO_URI, NODE_ENV } from '../config/env.js';

if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable inside .env.development.local or .env.production.local');
}


const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`Connected to MongoDB in ${NODE_ENV} mode`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};


export default connectDB;