import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import header_logo from '../assets/images/HomePage/header_logo.svg';

const Header = () => {

    const [active, setactive] = useState(false);

    const onactive = () => {
        setactive(!active);
        document.documentElement.classList.toggle("cm_overflow");
    }

    const remove_menu = () => {
        const doc = document.querySelector(".header_main_block");
        doc.classList.remove("open_menu");
        document.documentElement.classList.remove("cm_overflow");
      }

    return (
        <div className={active ? "open_menu" : ""}>
            <header className="sticky">
                <Container>
                    <div className="in_header_block">
                        <div className="logo_hold">
                            <a href="#0">
                                <img src={header_logo} alt="logo" className="img-fluid" />
                            </a>
                        </div>
                        <div className="menu_block">
                            <div className="menu_list">
                                <ul className="navbar_nav">
                                    <li className="active nav-btn" data-row-id="banner_wrapper">
                                        <a href="https://docs.mercuryfi.exchange/" target="/" className="scroll_trigger">
                                            Docs
                                        </a>
                                    </li>
                                    <li className="nav-btn">
                                        <a href="#0">
                                            WhitePaper
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" onClick={remove_menu}>
                                            LaunchApp
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu_btn"></div>
                        </div>
                        <div className="menu_toggle_btn" onClick={onactive}>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </div>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default Header;