const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Jan Kowalski' }, { id: 2, name: 'Anna Nowak' }]);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
