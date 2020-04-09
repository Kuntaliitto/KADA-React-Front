import React from 'react';
import '../styles/header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="top-navi">
            <div className="left">
                <img src="/turku-logo.png" alt="Turun kaupungin vaakuna" />
            </div>
            <div className="right">
                <div className="search">
                    <span>Kontrasti</span><img className="contrast" src="/contrast.png" alt="" />
                    <span className="textsize">Tekstikoko</span><span className="small">A</span><span className="medium">A</span><span className="large">A</span>
                    <input placeholder="Etsi koko verkkopalvelusta"></input>
                    <button type="button">Etsi</button>
                </div>
                <div className="navi">
                    <a href="https://turku.fi">Lapsiperheet</a>
                    <a href="https://turku.fi">Maahanmuuttajat</a>
                    <a href="https://turku.fi">Matkailijat</a>
                    <a href="https://turku.fi">Nuoret</a>
                    <a href="https://turku.fi">Seniorit</a>
                    <a href="https://turku.fi">Työnhakijat</a>
                    <a href="https://turku.fi">Vammaiset</a>
                </div>
            </div>
        </div>
        <div className="main-navi">
            <a href="https://turku.fi">Korona</a>
            <a href="https://turku.fi">Asuminen ja ympäristö</a>
            <a href="https://turku.fi">Kulttuuri ja liikunta</a>
            <a href="https://turku.fi">Päivähoito ja koulutus</a>
            <a href="https://turku.fi">Sosiaali- ja terveyspalvelut</a>
            <a href="https://turku.fi">Tapahtuma- ja yrityspalvelut</a>
        </div>
      </div>
    )
  }
};

export default Header;
