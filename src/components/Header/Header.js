import React from 'react';
import headerData from './../../data/header';

function Header() {
    return (
        <header>
            <div className="site-restrict">
                <div className="logo float-left">
                    <span className="prefix lato-bold">GEEK</span>
                    <span className="sufix lato-bold">BADI</span>
                </div>
                <nav className="float-right">
                    <ul>
                        {headerData.map(headerItem => {
                            return <li className="inline-block font-18 pointer"><a href="/" onClick={(event) => {event.preventDefault()}}>{headerItem.label}</a></li>
                        })}
                    </ul>
                </nav>
                <div className="clear"></div>
            </div>
        </header>
    )
}

export default Header
