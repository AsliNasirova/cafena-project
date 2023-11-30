import { NavLink } from 'react-router-dom'
import styled, { } from "styled-components";
import React, { useState } from 'react'
import './index.scss'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const StyledNavLink = styled(NavLink)`
        position: relative;
        display: flex;
        align-items: center;
        transition: 0.3s;

        &::before{
            content: '';
            opacity: 0;
            display: block;
            position: absolute;
            left: 0px;
            z-index: -1;
            width: 12px;
            height: 12px;
            background-color: #cd8d16;
            border-radius: 10px;
            transition: 0.3s;
        }

        &:hover::before{
            left: -15px;
            z-index: 1;
            opacity: 1;
        }
        
        &:hover{
            color: #cd8d16;
        }
    `

    function handleModal() {
        setIsOpen(!isOpen)
    }

    return (
        <nav id='Navbar'>
            <div className="NavbarContainer">
                <div className="cafenaLogo">
                    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png" alt="" />
                </div>
                <div className="navigations">
                    <ul className='navList'>
                        <li className='headNav'><StyledNavLink to="/">HOME</StyledNavLink>
                            <ul className="homeSubNav subNav">
                                <li><StyledNavLink>HOME 1</StyledNavLink></li>
                                <li><StyledNavLink>HOME 2</StyledNavLink></li>
                                <li><StyledNavLink>HOME 3</StyledNavLink></li>
                            </ul>
                        </li>
                        <li><StyledNavLink to="/">ABOUT</StyledNavLink></li>
                        <li><StyledNavLink to="/">MENU</StyledNavLink></li>
                        <li><StyledNavLink to="/">RESERVATION</StyledNavLink></li>
                        <li className='headNav'><StyledNavLink to="/">PAGES</StyledNavLink>
                            <ul className="homeSubNav subNav">
                                <li><StyledNavLink>BLOG</StyledNavLink></li>
                                <li><StyledNavLink>BLOG DETAILS</StyledNavLink></li>
                                <li><StyledNavLink>CHEFS</StyledNavLink></li>
                                <li><StyledNavLink>FAQ</StyledNavLink></li>
                                <li><StyledNavLink>STORY</StyledNavLink></li>
                                <li><StyledNavLink>GALLERY</StyledNavLink></li>
                            </ul>
                        </li>
                        <li className='headNav'><StyledNavLink to="/">SHOP</StyledNavLink>
                            <ul className="homeSubNav subNav">
                                <li><StyledNavLink>SHOP</StyledNavLink></li>
                                <li><StyledNavLink>SHOP DETAILS</StyledNavLink></li>
                                <li><StyledNavLink>SHOP CART</StyledNavLink></li>
                                <li><StyledNavLink>SHOP CHECKOUT</StyledNavLink></li>
                            </ul>
                        </li>
                        <li><StyledNavLink to="/">CONTACT</StyledNavLink></li>
                    </ul>
                </div>
                <div className="iconsDiv">
                    <i className={`fa-solid fa-${isOpen ? 'xmark' : 'magnifying-glass'}`} onClick={handleModal}></i>
                    <i className="fa-solid fa-bars"></i>
                    <i className="fa-solid fa-basket-shopping basket_icon"><div className="basketProductCount">3</div></i>

                    <div className="searchForm">
                        <div className="searchBox">
                            <input id='searchFromInput' placeholder='Search Keywords' type="search" />
                            <i className="fa-solid fa-magnifying-glass searchFromIcon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar