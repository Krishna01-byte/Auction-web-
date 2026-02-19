const express = require('express');
const router = express.Router();
const { placeBid, getBidsByLot } = require('../controllers/bidController');

router.post('/', placeBid);
router.get('/:lotId', getBidsByLot);

module.exports = router;
