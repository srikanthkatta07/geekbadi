import React from 'react';
import menuData from '../../data/menu';

function navigateToPage(pageId) {
    const element = document.getElementById(pageId);
    const hederHeight = document.getElementById("header").clientHeight;
    const bodyElement = document.scrollingElement;
    bodyElement.scrollTop = element.offsetTop - hederHeight;
}

function Header() {
    return (
        <header id="header">
            <div className="site-restrict">
                <a href="/" className="logo float-left pointer">
                    <span className="prefix lato-bold">GEEK</span>
                    <span className="sufix lato-bold">BADI</span>
                </a>
                <nav className="web float-right">
                    <ul>
                        {menuData.map(menuItem => {
                            return <li className="inline-block font-18 pointer" onClick={() => navigateToPage(menuItem.id)}><a href="/" onClick={(event) => { event.preventDefault() }}>{menuItem.label}</a></li>
                        })}
                    </ul>
                </nav>
                <div className="clear"></div>
            </div>
        </header>
    )
}

export default Header
