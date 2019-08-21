const express = require('express');
const router = express.Router();

router.post('/', swaggerValidator.validate, contextExtractor, /*AuthenticationAndAuthorization, */ shipmentsController.postShipments);
router.post('/', swaggerValidator.validate, contextExtractor, /*AuthenticationAndAuthorization, */ shipmentsController.postShipments);
