import { useState } from 'react';
import axios from 'axios';
import ExchangeRate from './ExchangeRate';

const CurrencyConverter = () => {
  const currencies = ['ADA', 'BTC', 'CNY', 'CAD', 'ETH', 'LTC', 'USD', 'XRP'];
  const [primaryCurrency, setPrimaryCurrency] = useState(currencies[0]);
  const [secondaryCurrency, setSecondaryCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [exchangeData, setExchangeData] = useState({
    chosenPrimaryCurrency: currencies[0],
    chosenSecondaryCurrency: currencies[0],
    chosenExchangeRate: 0,
  });

  const convertCurrency = () => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        from_currency: primaryCurrency,
        function: 'CURRENCY_EXCHANGE_RATE',
        to_currency: secondaryCurrency,
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
        console.log(exchange_rate);
        setExchangeData({
          chosenPrimaryCurrency: primaryCurrency,
          chosenSecondaryCurrency: secondaryCurrency,
          chosenExchangeRate: exchange_rate,
        });

        setResult(exchange_rate * amount);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="currencyConverter converterBackground">
      <h2>Crypto Currency Converter</h2>

      <div>
        <table>
          <tbody>
            <div className="currencyRow">
              <tr>
                <td>Primary Currency:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    name="currency-amount-1"
                    className="inputField"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={primaryCurrency}
                    name="currency-option-1"
                    className="currencyOptions"
                    onChange={(e) => setPrimaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
            </div>

            <div className="currencyRow">
              <tr>
                <td>Secondary Currency:</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    name="currency-amount-2"
                    className="inputField"
                    value={result}
                    disabled={true}
                  />
                </td>
                <td>
                  <select
                    value={secondaryCurrency}
                    name="currency-option-2"
                    className="currencyOptions"
                    onChange={(e) => setSecondaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
            </div>
          </tbody>
        </table>
        <div className="convertButtonContainer">
          <button
            id="convert-button"
            className="convertButton"
            onClick={() => convertCurrency()}
          >
            Convert
          </button>
        </div>
      </div>

      <ExchangeRate exchangeData={exchangeData} />
      <div className="emptySpace1" style={{ height: 60 }} />
    </div>
  );
};

export default CurrencyConverter;
