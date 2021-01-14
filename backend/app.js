const express = require('express');
const app = express();
const port = 8000;
console.log(require('./routes/index'));
app.use('/api', require('./routes/index'))

app.get('/calculate', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})