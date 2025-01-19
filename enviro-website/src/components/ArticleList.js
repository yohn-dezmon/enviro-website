import ArticleShow from "./ArticleShow";

function ArticleList() {
  let articles = [
    { id: 1, title: "article 1", url: "https://www.world.com" },
    { id: 2, title: "article 2", url: "https://www.helloworld.com" },
  ];
  const renderedArticles = articles.map((article) => {
    return <ArticleShow article={article} />;
  });

  return (
    <div>
      <label>Article list</label>
      {renderedArticles}
    </div>
  );
}

export default ArticleList;
