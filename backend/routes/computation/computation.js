const express = require('express');
const calcCoordinates = require('../../services/calculator/calculator');

const router = express.Router();

router.get('/',(req,res) => {
    if(Number(req.query.r) === NaN || Number(req.query.n) === NaN || Number(req.query.h) === NaN) {
        return res.json({error: "ввод неправильных значений"});
    }
    res.json(calcCoordinates(Number(req.query.r),Number(req.query.n),Number(req.query.h)));
})

module.exports = router;