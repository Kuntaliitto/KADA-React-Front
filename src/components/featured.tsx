import React from 'react';
import '../styles/featured.css';
import articles from '../json/articles.json';

const FeaturedArticle = (props:any) => {
    const article = props.data;

    return (
        <div className={`featured-article size-${article.size}`}>
            <div className="text-wrapper">
                <p className="date">{ article.date }</p>
                <h1 className="title">{ article.title }</h1>
                <p className="ingress">{ article.ingress }</p>
            </div>
            <div className="image-wrapper">
                <img src={ article.image } alt="kuva" />
            </div>
        </div>
    )
}

const Featured:any = (props:any) => {
    return (
        <div className="featured">
            <div className="content">
                { articles.map(art => <FeaturedArticle key={ art.id } data={ art } />) }
            </div>
        </div>
    );
}

export default Featured;
