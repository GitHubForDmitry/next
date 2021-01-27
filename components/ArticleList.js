import React from 'react';
import articleStyle from '../styles/Article.module.css';
import ArticleItem from "./ArticleItem";

function ArticleList({articles}) {
    return (
        <div className={articleStyle.grid}>
        {articles.map(article => (
            <ArticleItem article={article} />
        ))}
        </div>

    );
}

export default ArticleList;