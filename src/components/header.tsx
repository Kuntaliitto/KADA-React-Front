import React from 'react';
import style from '../styles/header.module.scss'
import MenuItem from './MenuItem';

const DemographicNavi = (props:any) =>
    <div className={ style.navi }>
        <a href="https://turku.fi">Lapsiperheet</a>
        <a href="https://turku.fi">Maahanmuuttajat</a>
        <a href="https://turku.fi">Matkailijat</a>
        <a href="https://turku.fi">Nuoret</a>
        <a href="https://turku.fi">Seniorit</a>
        <a href="https://turku.fi">Työnhakijat</a>
        <a href="https://turku.fi">Vammaiset</a>
    </div>;

const menuItemProps = {
    label: 'Kulttuuri ja liikunta',
    subMenu: [ { label: 'Kulttuuri', thirdLevel: [ 'Edut ja rannekkeet', 'Kulttuurikuntoilureitit', 'Kulttuurin tekijöille', 'Monikulttuurisuus', 'Saavutettava kulttuuri' ] },
               { label: 'Kirjasto', thirdLevel: [ 'Kirjasto' ]  },
               { label: 'Museo', thirdLevel: [ 'Kaupungin museot','Kokoelmat','Palvelut' ]  },
               { label: 'Näyttelyt ja julkinen taide', thirdLevel: [ 'Katutaide','Näyttelyt','Ulkoveistokset' ]  },
               { label: 'Teatteri ja musiikki', thirdLevel: [ 'Filharmoninen orkesteri','Kaupunginteatteri','Musiikki','Teatteri' ]  },
               { label: 'Liikunta', thirdLevel: [ 'Harrastamaan','Liikuntapaikat','Liikuntapalveluiden hinnasto','Rannekkeet','Seuroille','Liikkeelle netissä','Turku Future Sports - kaikkia liikuttava Turku' ]  },
               { label: 'Ulkoilualueet', thirdLevel: [ 'Kalastus ja veneily','Leirialueet','Luonnonsuojelualueet','Polut, reitit ja ladut','Puistot','Ulkoilusaaret' ] }
            ],
    quickLinks: [ { label: 'HARRASTUSHAKU' },{ label: 'VASKI-VERKKOKIRJASTO' },{ label: 'LIIKUNTARANNEKKEEN LATAUS' },{ label: 'LIIKUNTAVUORON VARAUS' } ],
    theme: 'Kulttuuri'
};

const TurkuNavi = (props:any) =>
    <div className={ style.whiteNaviWrapper }>
        <div className={ style.mainNavi }>
            <a href="https://turku.fi"><span className={ style.menuItem }>Korona</span></a>
            <a href="https://turku.fi"><span className={ style.menuItem }>Asuminen ja ympäristö</span></a>
            <a href="https://turku.fi"><MenuItem content={ menuItemProps } onSelect={() => {}} /></a>
            <a href="https://turku.fi"><span className={ style.menuItem }>Päivähoito ja koulutus</span></a>
            <a href="https://turku.fi"><span className={ style.menuItem }>Sosiaali- ja terveyspalvelut</span></a>
            <a href="https://turku.fi"><span className={ style.menuItem }>Tapahtuma- ja yrityspalvelut</span></a>
        </div>
    </div>;

const PoriNavi = (props:any) =>
    <div className={ style.blackNaviWrapper }>
        <div className={ style.mainNavi }>
            <a href="https://pori.fi">ASUMINEN JA YMPÄRISTÖ</a>
            <a href="https://pori.fi">KASVATUS JA KOULUTUS</a>
            <a href="https://pori.fi">KULTTUURI JA LIIKUNTA</a>
            <a href="https://pori.fi">SOSIAALI JA TERVEYS</a>
            <a href="https://pori.fi">TYÖ JA YRITTÄMINEN</a>
        </div>
    </div>;

interface headerProps {
    setSiteId: Function,
    currentSite: string
}

const Header = (props:headerProps) => {
    const { currentSite } = props;

    let logo = '';
    switch (props.currentSite) {
        case 'turku': logo = '/turku-logo.png'; break;
        case 'pori': logo = '/pori-logo.png'; break;
    }

    const switchSite = () => {
        if (props.currentSite === 'turku') {
            props.setSiteId('pori');
        } else if (props.currentSite === 'pori') {
            props.setSiteId('turku');
        }
    }

    return (
      <div className={ style.header }>
        { currentSite === 'pori' &&
            <div className={ style.naviWrapper }>
                <DemographicNavi />
            </div>
        }

        <div className={ style.topNavi }>
            <div className={ style.left }>
                <img className={ style.siteLogo } src={ logo } alt="Kaupungin vaakuna" onClick={() => switchSite() } />
            </div>

            { currentSite === 'turku' &&
                <div className={ style.right }>
                    <div className={ style.search }>
                        <span>Kontrasti</span><img className={ style.contrast } src="/contrast.png" alt="" />
                        <span className={ style.textsize }>Tekstikoko</span><span className={ style.small }>A</span><span className={ style.medium }>A</span><span className={ style.large }>A</span>
                        <input placeholder="Etsi koko verkkopalvelusta"></input>
                        <button type="button">Etsi</button>
                    </div>
                    <DemographicNavi />
                </div>
            }
        </div>

        { currentSite === 'pori' &&
            <PoriNavi />
        }
        { currentSite === 'turku' &&
            <TurkuNavi />
        }
      </div>
    )
};

export default Header;
