import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from '../styles/newsfeed.module.scss'
import fetch from 'cross-fetch';
import ApolloClient from 'apollo-client';
import moment from 'moment';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GET_NEWSFEED, GET_NEWSFEED_2 } from '../queries';
import { NewsArticle } from '../interfaces';

const client = new ApolloClient({
    link: createHttpLink({
//        uri: 'http://localhost:4000',
        uri: 'http://local.pori.fi:9100/graphql',
        fetch: fetch
    }),
    cache: new InMemoryCache()
});

const doQuery = () => {
    return client
        .query({ query: GET_NEWSFEED_2 })
        .then(result => result.data.news);
}

interface FeedArticleProps {
    key: string;
    data: NewsArticle;
}

const FeedArticle = (props:FeedArticleProps) => {
    const article = props.data;

    return (
        <div className={ classNames(style.newsfeedArticle, style[`theme-${article.theme}`]) }>
            <div className={ style.imageWrapper }>
                <img src={ article.imageUrl.small } alt="kuva" />
                { article.imageTitle &&
                    <div className={ style.caption }>{ article.imageTitle }</div>
                }
            </div>
            <div className={ classNames(style.textWrapper, style[`theme-${article.theme}`]) }>
                <p className={ style.date }>{ moment(article.created).format('DD.MM.YYYY') }</p>
                <h3 className={ style.title }>{ article.title }</h3>
                <p className={ style.ingress }>{ article.ingress }</p>
            </div>
        </div>
    )
}

const Selectors:any = () => {
    return (
        <div className={ style.selectors }>
            <h3>Ajankohtaisvirta</h3>
            <h3 className={ style.selected }>Uutiset</h3>
            <h3>Facebook</h3>
            <h3>Twitter</h3>
            <h3>Instagram</h3>
            <h3>Youtube</h3>
        </div>
    )
}

const Newsfeed:any = () => {
    const [ articles, setArticles ] = useState<Array<any>>([]);

    useEffect(() => { doQuery().then(list => setArticles(list)) }, []);

    return (
        <div className= { style.newsfeed }>
            <Selectors />
            <div className={ style.content }>
                { articles.map((art:NewsArticle) =>
                    <FeedArticle
                        key={ `newsfeed${art.id}` }
                        data={{ ...art, size:1, theme: 'Oletus' }}
                    />
                )}
            </div>
            <div className={ style.moreArticles }>
                <button>Lue lisää uutisia</button>
            </div>
        </div>
    )
}

export default Newsfeed;
