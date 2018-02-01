import express from 'express';
import path from 'path';
import axios from 'axios';
const router = express.Router();
import sendGridController from '../controllers/sendGridController';

//add email recipient
router.post('/api/addcontact', sendGridController.addContact)

//catch webhook and publish
router.post('/webhook', sendGridController.sendEmail)

//home page
router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname), '../../index.html');
});

module.exports = router;
