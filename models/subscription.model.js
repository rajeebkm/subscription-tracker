import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Subscription Name is required'], trim: true, minlength: [2, 'Subscription Name must be at least 2 characters long'], maxlength: [100, 'Subscription Name must be less than 100 characters long'] },
    price: { type: Number, required: [true, 'Subscription Price is required'], min: [0, 'Subscription Price must be greater than 0'] },
    currency: { type: String, required: [true, 'Subscription Currency is required'], enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'NZD', 'CHF', 'JPY', 'CNY', 'INR', 'BRL', 'ARS', 'CLP', 'COP', 'MXN', 'PEN', 'PYG', 'UYU', 'VEF', 'VND', 'ZAR'], default: 'USD' },
    frequency: { type: String, required: [true, 'Subscription Frequency is required'], enum: ['daily', 'weekly', 'monthly', 'yearly'] },
    category: { type: String, required: [true, 'Subscription Category is required'], enum: ['sports', 'news', 'food', 'lifestyle', 'entertainment', 'shopping', 'transportation', 'technology', 'health', 'education', 'other'] },
    paymentMethod: { type: String, required: [true, 'Subscription Payment Method is required'], enum: ['credit card', 'debit card', 'paypal', 'bank transfer', 'other'] },
    status: { type: String, required: [true, 'Subscription Status is required'], enum: ['active', 'cancelled', 'expired'], default: 'active' },
    startDate: { type: Date, required: [true, 'Subscription Start Date is required'], validate: { validator: function (value) { return value <= new Date(); }, message: 'Start date must be in the past' } },
    renewalDate: { type: Date, validate: { validator: function (value) { return value > this.startDate; }, message: 'Renewal date must be after start date' } },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
}, { timestamps: true });


subscriptionSchema.pre('save', function (next) {
    if (!this.renewalDate) {
        this.renewalDate = new Date(this.startDate);
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    if (this.renewalDate < new Date()) {
        this.status = 'expired';
    }
    next();
});


const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;