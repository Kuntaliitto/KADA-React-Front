import React from 'react';
import Header from './components/header'
import Banner from './components/banner'
import Featured from './components/featured'
import Newsfeed from './components/newsfeed'
import Footer from './components/footer'
import './styles/App.css';

function App() {
  return (
    <div className="site-container">
      <Header />
      <Banner />
      <Featured />
      <Newsfeed />
      <Footer />
    </div>
  );
}

export default App;
