const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './public');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const uplaod = multer({ storage });
const router = express.Router();

router.post('/single', uplaod.single('image'), (req, res) => {
  res.status(200).json({ file: req.file.originalname });
});

router.post('/multiple', uplaod.array('images'), (req, res) => {
  const files = [];
  req.files.forEach(image => files.push(image.originalname));
  res.status(200).json({ files });
});

module.exports = router;
