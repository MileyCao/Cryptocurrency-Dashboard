import { useState } from 'react';
import ExchangeRate from './ExchangeRate';

const CurrencyConverter = () => {
  const currencies = ['ADA', 'BTC', 'CNY', 'CAD', 'ETH', 'LTC', 'USD', 'XRP'];
  const [primaryCurrency, setPrimaryCurrency] = useState(currencies[0]);
  const [secondaryCurrency, setSecondaryCurrency] = useState(currencies[0]);
  return (
    <div className="currencyConverter">
      <h2>Currency Converter</h2>

      <div>
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input type="number" name="currency-amount-1" value={''} />
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
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input type="number" name="currency-amount-2" value={''} />
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
          </tbody>
        </table>
      </div>

      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
