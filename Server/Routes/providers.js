const express = require('express');
const router = express.Router();

const providerController = require('../Controllers/providers');

router.get('/', (req, res, next) => {
    providerController.index(req, res, next);
});

module.exports = router;