import React from 'react';
import classNames from 'classnames/bind';
import style from '../styles/menuitem.module.scss';

interface MenuItemType {
    label: string;
    subMenu: object[];
    quickLinks: object[];
    theme: string;
}

const SecondLevelItem = (props:any) => {
    const { content } = props;

    return (
        <li className={ style.secondLevelMenuItem }>
            { content.label }
            <ul className={ style.thirdLevelMenu }>
                { content.thirdLevel.map((sub:any, i:number) =>
                    <li key={ `nav3-${i}` } className={ style.thirdLevelMenuItem }>{sub}</li> )}
            </ul>
        </li>
    )
}

const QuickLink = (props:any) => {
    const { content } = props;

    return (
        <div className={ classNames(style.quickLink, style[`theme-${content.theme}`])}>
            { content.label }
            <div className={ style.overlay } />
        </div>
    )
}

interface MenuItemProps {
    content: MenuItemType;
    onSelect: Function;
}

const MenuItem = (props:MenuItemProps) => {
    const { content, onSelect } = props;

    return (
        <li className={ classNames(style.MenuItem, style[`theme-${content.theme}`]) }>
            { content.label }
            <ul className={ classNames(style.secondLevelMenu, style[`theme-${content.theme}`]) }>
                <div>
                    { content.subMenu.map((subMenuItem, i) => <SecondLevelItem key={ `nav2-${i}` } content={ subMenuItem } />) }
                </div>
                <div></div>
                <div className={ style.quickLinkWrapper }>
                    { content.quickLinks.map((quickLink, i) => <QuickLink key={ `link-${i}` } content={{ ...quickLink, theme:content.theme }} />) }
                </div>
            </ul>
        </li>
    )
}

export default MenuItem;