const Auction = require('../models/Auction');
const Lot = require('../models/Lot');

// @desc    Get all auctions
// @route   GET /api/auctions
// @access  Public
const getAuctions = async (req, res) => {
    try {
        const { status, department } = req.query;
        let query = {};

        if (status) query.status = status;
        if (department) query.department = department;

        const auctions = await Auction.find(query);
        res.status(200).json(auctions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get auction by ID
// @route   GET /api/auctions/:id
// @access  Public
const getAuctionById = async (req, res) => {
    try {
        const auction = await Auction.findById(req.params.id);
        const lots = await Lot.find({ auctionId: req.params.id });

        if (!auction) {
            return res.status(404).json({ message: 'Auction not found' });
        }

        res.status(200).json({ auction, lots });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create an auction (Admin)
// @route   POST /api/auctions
// @access  Private
const createAuction = async (req, res) => {
    try {
        const auction = await Auction.create(req.body);
        res.status(201).json(auction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Create a lot (Admin)
// @route   POST /api/auctions/:id/lots
// @access  Private
const createLot = async (req, res) => {
    try {
        const lot = await Lot.create({ ...req.body, auctionId: req.params.id });
        res.status(201).json(lot);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAuctions,
    getAuctionById,
    createAuction,
    createLot
};
