const express = require('express');
const app = express();
const port = 3000;

// Statische Dateien aus dem öffentlichen Ordner bedienen
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
