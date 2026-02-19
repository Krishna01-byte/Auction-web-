const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['upcoming', 'live', 'closed'],
        default: 'upcoming',
    },
    image: {
        type: String,
    }
}, { timestamps: true });

const Auction = mongoose.model('Auction', auctionSchema);
module.exports = Auction;
