import React from 'react';
import '../styles/banner.css'

const Banner:any = () => <div className="banner">
    <img src="/turku-korona.jpg" alt="" />
        <div className="overlay1">
           <a href="https://turku.fi"><h1>Koronavirus - ajankohtaista tietoa ja ohjeita</h1></a>
           <p>Koronavirus-aiheinen tieto, tuki ja ohjeistukset kootusti osoitteessa www.turku.fi/korona. Pääset sivuille klikkaamalla otsikkoa.</p>
        </div>
        <div className="overlay2">
            <h2>Suosittelemme</h2>
            <a href="https://turku.fi">Bussit ja aikataulut</a>
            <a href="https://turku.fi">Palautepalvelu</a>
            <a href="https://turku.fi">Tapahtumakalenteri</a>
            <a href="https://turku.fi">Turun palvelukartta</a>
            <a href="https://turku.fi">Turun seudun opaskartta</a>
            <a href="https://turku.fi">Vaski-verkkokirjasto</a>
        </div>
</div>;

export default Banner;
