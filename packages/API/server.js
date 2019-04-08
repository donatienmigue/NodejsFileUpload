const express = require('express');
const bodyParser = require('body-parser');
const uploadRoutes = require('./uploadRoutes');

const PORT = process.env.PORT || 4444;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send('Wellcome Guy');
});
app.use('/upload', uploadRoutes);
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on http://localhost:${PORT}`);
  }
});
