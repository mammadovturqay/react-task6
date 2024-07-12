import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../data";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
