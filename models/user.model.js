import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Use Name is required'], trim: true, minlength: [3, 'Use Name must be at least 3 characters long'], maxlength: [50, 'Use Name must be less than 50 characters long'] },
    email: { type: String, required: [true, 'User Email is required'], unique: true, trim: true, lowercase: true, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'] },
    password: { type: String, required: [true, 'User Password is required'], minlength: [6, 'Password must be at least 8 characters long'] },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;