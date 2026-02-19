const Bid = require('../models/Bid');
const Lot = require('../models/Lot');

// @desc    Place a bid
// @route   POST /api/bids
// @access  Private (Public for now)
const placeBid = async (req, res) => {
    const { lotId, userId, amount } = req.body;

    try {
        const lot = await Lot.findById(lotId);

        if (!lot) {
            return res.status(404).json({ message: 'Lot not found' });
        }

        if (amount <= lot.currentBid) {
            return res.status(400).json({ message: 'Bid must be higher than current bid' });
        }

        // Create bid
        const bid = await Bid.create({
            lotId,
            userId,
            amount,
        });

        // Update lot current bid
        lot.currentBid = amount;
        await lot.save();

        res.status(201).json(bid);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get bids for a lot
// @route   GET /api/bids/:lotId
// @access  Public
const getBidsByLot = async (req, res) => {
    try {
        const bids = await Bid.find({ lotId: req.params.lotId }).sort({ amount: -1 });
        res.status(200).json(bids);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    placeBid,
    getBidsByLot,
};
