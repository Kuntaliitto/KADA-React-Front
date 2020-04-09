import React from 'react';
import '../styles/newsfeed.css'
import articles from '../json/articles.json';

const FeedArticle = (props:any) => {
    const article = props.data;

    return (
        <div className="newsfeed-article">
            <div className="image-wrapper">
                <img src={ article.image } alt="kuva" />
            </div>
            <div className="text-wrapper">
                <p className="date">{ article.date }</p>
                <h3 className="title">{ article.title }</h3>
                <p className="ingress">{ article.ingress }</p>
            </div>
        </div>
    )
}

const Newsfeed:any = () => {
    return (
        <div className="newsfeed">
            <div className="content">
                { articles.map(art => <FeedArticle key={ art.id } data={ art } />) }
            </div>
        </div>
    )
}

export default Newsfeed;
