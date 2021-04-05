const express = require('express');
const app = express();
const port = 80;
const path = require('path');

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'));
  })

  app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'));
  })
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'));
  })

app.listen(port, () => {
  console.log(`Example app listening at mercadoliebre-dh.herokuapp.com:${port}`)
})