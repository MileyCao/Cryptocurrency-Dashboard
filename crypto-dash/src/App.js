import CurrencyConverter from './components/CurrencyConverter';
import NewsFeed from './components/NewsFeed';

const App = () => {
  return (
    <div className="dashboard">
      <div className="emptySpace1" />
      <div className="dashboardContainer">
        <h1 className="dashboardTitle">Crypto Dashboard</h1>
        <div className="landing">
          <CurrencyConverter />
          <NewsFeed />
        </div>
      </div>

      <div className="emptySpace1" style={{ height: 220 }} />
    </div>
  );
};

export default App;
