const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

//listen to our server
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json('hi');
});
app.get('/news', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});
app.get('/convert', (req, res) => {
  const toCurrency = req.query.to_currency;
  const fromCurrency = req.query.from_currency;
  console.log('toCurrency', toCurrency);
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      from_currency: fromCurrency,
      function: 'CURRENCY_EXCHANGE_RATE',
      to_currency: toCurrency,
    },
    headers: {
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  let exchange_rate = 0;
  axios
    .request(options)
    .then((response) => {
      exchange_rate =
        response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
      res.json(exchange_rate);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`Server is running on ${PORT}`));
