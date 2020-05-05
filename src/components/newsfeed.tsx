import React from 'react';
import classNames from 'classnames/bind';
import style from '../styles/newsfeed.module.scss'
import { useQuery } from "@apollo/react-hooks";
import moment from 'moment';
import { GET_NEWSFEED } from '../queries';
import { NewsArticle } from '../interfaces';

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
    const { loading, error, data } = useQuery(GET_NEWSFEED);
    const articles = data ? data.news : [];

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
