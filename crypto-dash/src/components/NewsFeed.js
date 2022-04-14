import { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
        'X-RapidAPI-Key': 'cc8a4ee81fmshf8e5a471f316c5dp189b02jsn84406eb4c212',
      },
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
    <div className="newsFeed">
      <h2>NEWS FEED</h2>
      {articles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url} target="_blank">
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
