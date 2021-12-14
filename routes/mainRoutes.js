const express = require('express');
const date = require('../getDate.js')
const mainController = require('../controllers/mainController')
const router = express.Router();

router.get('/', mainController.getMainPage);

router.get('/getdate', mainController.getDate);

router.get('/weekday', mainController.getWeekday);

router.post('/', mainController.postWish);

router.post('/deleteWish', mainController);

module.exports = router;