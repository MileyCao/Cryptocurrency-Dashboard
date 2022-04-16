const ExchangeRate = ({ exchangeData }) => {
  return (
    <div className="exchangeRate">
      <div className="tagLine">Current Exchange Rate</div>
      <div className="exchangeRateContainer">
        <h2>{parseFloat(exchangeData.chosenExchangeRate).toFixed(2)}</h2>
        <p>
          {exchangeData.chosenPrimaryCurrency} to{' '}
          {exchangeData.chosenSecondaryCurrency}
        </p>
      </div>
    </div>
  );
};

export default ExchangeRate;
