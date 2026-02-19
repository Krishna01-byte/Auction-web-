const mongoose = require('mongoose');

const lotSchema = new mongoose.Schema({
    auctionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auction',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
    },
    estimate: {
        type: Number,
        required: true,
    },
    currentBid: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Lot = mongoose.model('Lot', lotSchema);
module.exports = Lot;
