import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from '../styles/featured.module.scss';
import fetch from 'cross-fetch';
import ApolloClient from 'apollo-client';
import moment from 'moment';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NewsArticle } from '../interfaces';
import { GET_FEATURED, GET_FEATURED_2 } from '../queries';

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
        .query({ query: GET_FEATURED_2 })
        .then(result => result.data.news);
}

interface FeaturedArticleProps {
    key: String,
    onSelect: Function;
    article: NewsArticle
}

const FeaturedArticle = (props:FeaturedArticleProps) => {
    const { article, onSelect } = props;

    return (
        <div className={ classNames(style.featuredArticle, style[`size-${article.size}`], style[`theme-${article.theme}`]) }>
            <div className={ classNames(style.textWrapper, style[`theme-${article.theme}`]) }>
                <p className= { style.date }>{ moment(article.created).format('DD.MM.YYYY') }</p>
                <h1 className={ style.title } onClick={() => onSelect(article.id)}>{ article.title }</h1>
                <p className={ style.ingress }>{ article.ingress }</p>
            </div>
            <div className={ style.imageWrapper }>
                <img src={ article.imageUrl.medium } alt="kuva" />
                { article.imageTitle &&
                    <div className={ classNames(style.caption, style[`theme-${article.theme}`]) }>{ article.imageTitle }</div>
                }
            </div>
        </div>
    )
}

const FeaturedLink = (props:any) => {
    const { label, icon } = props.data;

    return (
        <div className={ style.featuredLink }>
            <h5 className={ style.label }>{ label }</h5>
            <img className={ style.icon } src={ icon } alt={ label } />
        </div>
    )
}


const dummyLinks:Array<{ label:String, icon:String }> = [
    { label: 'Bussit ja aikataulut', icon: 'bussit-ja-aikataulut.png' }, 
    { label: 'Tapahtumat', icon: 'kalenteri.png' },
    { label: 'Anna palautetta', icon: 'palaute.png' },
    { label: 'Verkkokauppa', icon: 'verkkokauppa.png' },
    { label: 'Kilpailutuskalenteri', icon: 'kalenteri.png' },
    { label: 'Esityslistat ja pöytäkirjat', icon: 'listat-ja-poytakirjat.png' },
    { label: 'Kartat', icon: 'kartat.png' },
    { label: 'Sähköinen ilmoitustaulu', icon: 'ilmoitustaulu.png' },
    { label: 'Nettikamerat', icon: 'nettikamera.png' }
];

const Featured:any = (props:any) => {
    const [ articles, setArticles ] = useState<Array<any>>([]);
    const links = dummyLinks;
    useEffect(() => { doQuery().then(list => setArticles(list)) }, []);

    const openArticle = (id:string) => {
        alert ("Avataan artikkeli " + id);
    }

    return (
        <div className={ style.featured }>
            <div className={ style.content }>
                { articles.map((art:NewsArticle, i:number) => {
                    if (i < 4) {
                        return (
                            <FeaturedArticle
                                key={ `article${art.id}` }
                                article={{ ...art, size:1, theme: 'Oletus' }}
                                onSelect={ openArticle }
                            />
                        )
                    } else {
                        return ""
                    }
                })
                }
                { /*  { links.map((link,i) => <FeaturedLink key={i} data={link} />) }  */}
            </div>
        </div>
    );
}

export default Featured;
