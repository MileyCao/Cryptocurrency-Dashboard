import { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/news',
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data?.slice(0, 7));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="newsFeed newsBackground" style={{ color: 'white' }}>
      <h2>NEWS FEED</h2>
      {articles?.map((article, _index) => (
        <div key={_index}>
          <a
            href={article.url}
            target="_blank"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
