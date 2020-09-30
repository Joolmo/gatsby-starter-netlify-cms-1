import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <header id="main-header">
            <div className="logo"></div>
            <nav>
                <ul>
                    <li>
                        <i className="icon"/>
                        <span>Home</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;