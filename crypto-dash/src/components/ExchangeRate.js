const ExchangeRate = ({ exchangeData }) => {
  return (
    <div className="exchangeRate">
      <div className="tagLine">Current Exchange Rate</div>
      <div className="exchangeRateContainer">
        <h1>{exchangeData.chosenExchangeRate}</h1>
        <p>
          {exchangeData.chosenPrimaryCurrency} to{' '}
          {exchangeData.chosenSecondaryCurrency}
        </p>
      </div>
    </div>
  );
};

export default ExchangeRate;
