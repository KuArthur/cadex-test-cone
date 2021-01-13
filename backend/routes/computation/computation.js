const express = require('express');
const calcCoordinates = require('../../services/calculator/calculator');

const router = express.Router();

router.get('/',(req,res) => {
    res.json(calcCoordinates(Number(req.query.r),Number(req.query.n),Number(req.query.h)));
})

module.exports = router;