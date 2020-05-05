import React from 'react';
import Head from 'next/head';
import Header from './components/header'
import Banner from './components/banner'
import Featured from './components/featured'
import Newsfeed from './components/newsfeed'
import Footer from './components/footer'

function App(props:any) {

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" />
      </Head>

      <div className={ `siteContainer ${props.site}` }>
        <Header setSiteId={ props.setSiteId } currentSite={ props.site } />
        <Banner currentSite={ props.site } />
        <Featured />
        <Newsfeed />
        <Footer />
      </div>
    </div>
  );
}

export default App;
