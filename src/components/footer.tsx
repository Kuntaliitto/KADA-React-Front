import React from 'react';
import '../styles/footer.css'

const FooterNavi = (props:any) => <div className="navi-block">
    <a className="title" href="https://turku.fi">{ props.title }</a>
    <ul>
    { props.links.map((text:string, i:number) => <li key={ i }><a href="https://turku.fi">{ text }</a></li>) }
    </ul>
</div>

const Footer:any = () => <div className="footer">
    <div className="info-wrapper">
        <img src="/logo-footer.png" alt="Turun vaakuna" />
        <p>© Turun kaupunki</p>
        <p>&ensp;</p>
        <p>PL 355, 20101 TURKU</p>
        <p>vaihde (02) 330 000</p>
        <p>turun.kaupunki@turku.fi</p>
        <p>etunimi.sukunimi@turku.fi</p>
    </div>
    <div className="menu-wrapper">
        <FooterNavi title="ORGANISAATIO" links={[ "Kaupungin johto","Konsernihallinto","Palvelukeskukset","Toimialat","Yhtiöt ja yhteisöt" ]} />
        <FooterNavi title="PÄÄTÖKSENTEKO" links={[ "Kaupunginvaltuusto","Kaupunginhallitus","Lautakunnat","Sidonnaisuudet","Osallistu ja vaikuta","Kuulutukset" ]} />
        <FooterNavi title="TALOUS JA STRATEGIA" links={[ "Kehittämishankkeet ja projektit","Rahoitus ja sijoitus","Strategiat ja ohjelmat","Talousarvio","Tilinpäätös ja seurantaraportit" ]} />
        <FooterNavi title="TURKU-TIETO" links={[ "Arkistot","Avoin data","Julkaisut ja raportit","Kartat ja paikkatieto","Kaupunkitutkimus","Media","Tietosuoja","Tilastot" ]} />
        <FooterNavi title="OTA YHTEYTTÄ" links={[ "Anna palautetta","Asioi verkossa","Avoimet työpaikat","Avustukset","Laskutus ja maksaminen","Neuvonta","Palveluhakemisto","Vuokrattavat tilat","Yhteystiedot" ]} />
    </div>
</div>;

export default Footer;
