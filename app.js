const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny')); //Logs all incoming console requests

app.get('/', (req, res) => {
  res.send('Hello World! We were asked to send a simple greeting as a response, here it is!');
});

app.get('/about', (req,res) => {
  res.sendFile(__dirname + '/about.html');
});

app.all('*', (req, res) => { // End all for routes that dont exist or other errors
  res.send('404 ERROR. ROUTE NOT FOUND')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});