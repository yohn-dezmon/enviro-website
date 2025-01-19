function ArticleShow({ article }) {
  // todo: understand why rel="noreferrer" is good for security
  return (
    <div>
      <a href={article.url} rel="noreferrer">
        {article.title}
      </a>
    </div>
  );
}

export default ArticleShow;
