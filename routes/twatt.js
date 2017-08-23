var express = require('express');
var router = express.Router();
const twattController = require('../controllers/twatt');

router.get('/timeline', twattController.getTL);
router.get('/usertimeline', twattController.getUserTL);
router.post('/postStatus', twattController.postStatus);

module.exports = router;
