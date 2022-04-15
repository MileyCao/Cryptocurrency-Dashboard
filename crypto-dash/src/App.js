import CurrencyConverter from './components/CurrencyConverter';
import NewsFeed from './components/NewsFeed';

const App = () => {
  return (
    <div className="dashboard">
      <div className="emptySpace1" />
      <div className="landing">
        <CurrencyConverter />
        <NewsFeed />
      </div>
      <div className="emptySpace1" style={{ height: 420 }} />
    </div>
  );
};

export default App;
