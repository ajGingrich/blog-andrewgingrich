import express from 'express';
import path from 'path';
const router = express.Router();

//home page
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname), '../../index.html');
});

module.exports = router;