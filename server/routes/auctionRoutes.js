const express = require('express');
const router = express.Router();
const { getAuctions, getAuctionById, createAuction, createLot } = require('../controllers/auctionController');

router.get('/', getAuctions);
router.get('/:id', getAuctionById);
router.post('/', createAuction);
router.post('/:id/lots', createLot);

module.exports = router;
