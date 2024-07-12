import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { articles } from "../data";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleSearch = (e) => {
    setSearchParams({ query: e.target.value });
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Articles</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={query}
        onChange={handleSearch}
      />
      <ul>
        {filteredArticles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
