import ExchangeRate from './ExchangeRate';

const CurrencyConverter = () => {
  return (
    <div className="currencyConverter">
      <h2>Currency Converter</h2>

      <div>
        <table>
          <body>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input type="number" name="currency-amount-1" value={''} />
              </td>
              <td>
                <select
                  value={''}
                  name="currency-option-1"
                  className="currencyOptions"
                >
                  <option value=""></option>
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
                  value={''}
                  name="currency-option-2"
                  className="currencyOptions"
                >
                  <option value=""></option>
                </select>
              </td>
            </tr>
          </body>
        </table>
      </div>

      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
