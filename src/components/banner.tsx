import React from 'react';
import styles from '../styles/banner.module.scss';

interface bannerProps {
    currentSite: string;
}

const Banner:any = (props: bannerProps) => {

    let bannerImage = '';
    switch (props.currentSite) {
        case 'turku': bannerImage = '/turku-korona.jpg'; break;
        case 'pori': bannerImage = '/pori-banner.jpg'; break;
    }

    return (
        <div className={ styles.banner }>
            <img src={ bannerImage } alt="Pääkuva" />

            { props.currentSite === 'turku' &&
                <div>
                    <div className={ styles.overlay1 }>
                    <a href="https://turku.fi"><h1>Koronavirus - ajankohtaista tietoa ja ohjeita</h1></a>
                    <p>Koronavirus-aiheinen tieto, tuki ja ohjeistukset kootusti osoitteessa www.turku.fi/korona. Pääset sivuille klikkaamalla otsikkoa.</p>
                    </div>
                    <div className={ styles.overlay2 }>
                        <h2>Suosittelemme</h2>
                        <a href="https://turku.fi">Bussit ja aikataulut</a>
                        <a href="https://turku.fi">Palautepalvelu</a>
                        <a href="https://turku.fi">Tapahtumakalenteri</a>
                        <a href="https://turku.fi">Turun palvelukartta</a>
                        <a href="https://turku.fi">Turun seudun opaskartta</a>
                        <a href="https://turku.fi">Vaski-verkkokirjasto</a>
                    </div>
                </div>
            }
        </div>
    );
}

export default Banner;
