const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('client/build'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
