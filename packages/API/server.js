const express = require('express');

const PORT = process.env.PORT || 4444;

const app = express();

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on http://localhost:${PORT}`);
  }
});
