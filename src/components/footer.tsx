import React from 'react';
import style from '../styles/footer.module.scss'

const FooterNavi = (props:any) => <div className={ style.naviBlock }>
    <a className={ style.title } href="https://turku.fi">{ props.title }</a>
    <ul>
    { props.links.map((text:string, i:number) => <li key={ i }><a className={ style.subtitle } href="https://turku.fi">{ text }</a></li>) }
    </ul>
</div>

const Footer:any = () => <div className={ style.footer }>
    <div className={ style.infoWrapper }>
        <img src="/logo-footer.png" alt="Turun vaakuna" />
        <p>© Turun kaupunki</p>
        <p>&ensp;</p>
        <p>PL 355, 20101 TURKU</p>
        <p>vaihde (02) 330 000</p>
        <p>turun.kaupunki@turku.fi</p>
        <p>etunimi.sukunimi@turku.fi</p>
    </div>
    <div className={ style.menuWrapper }>
        <FooterNavi title="Organisaatio" links={[ "Kaupungin johto","Konsernihallinto","Palvelukeskukset","Toimialat","Yhtiöt ja yhteisöt" ]} />
        <FooterNavi title="Päätöksenteko" links={[ "Kaupunginvaltuusto","Kaupunginhallitus","Lautakunnat","Sidonnaisuudet","Osallistu ja vaikuta","Kuulutukset" ]} />
        <FooterNavi title="Talous ja strategia" links={[ "Kehittämishankkeet ja projektit","Rahoitus ja sijoitus","Strategiat ja ohjelmat","Talousarvio","Tilinpäätös ja seurantaraportit" ]} />
        <FooterNavi title="Turku-tieto" links={[ "Arkistot","Avoin data","Julkaisut ja raportit","Kartat ja paikkatieto","Kaupunkitutkimus","Media","Tietosuoja","Tilastot" ]} />
        <FooterNavi title="Ota yhteyttä" links={[ "Anna palautetta","Asioi verkossa","Avoimet työpaikat","Avustukset","Laskutus ja maksaminen","Neuvonta","Palveluhakemisto","Vuokrattavat tilat","Yhteystiedot" ]} />
    </div>
</div>;

export default Footer;
