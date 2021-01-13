const express = require('express');

const router = express.Router();

router.use('/computation', require('./computation/computation'))

module.exports = router;