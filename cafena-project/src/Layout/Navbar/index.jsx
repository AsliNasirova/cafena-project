import { NavLink } from 'react-router-dom'
import styled, { } from "styled-components";
import React, { useMemo, useRef, useState } from 'react'
import SideInfo from './SideInfo';
import SideMenu from './SideMenu';
import './index.scss'
import SideBasket from './SideBasket';
import { usePosition } from '../../Context/Position';
import { useBasket } from './../../Context/Basket';

function Navbar() {

    const { basket, setBasket, addToBasket } = useBasket()
    const [isInfoOpen, setIsInfoOpen] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const Count = useMemo(()=>basket.length)

    const sideInfo = useRef()

    const {setPosition} = usePosition()

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

    const HideSideInfo = styled.div`
            display: 'none';
        `

    const HideSideMenu = styled.div`
            display: 'none';
        `

    function handlePosition() {
        setTimeout(()=>setPosition('0px'),10)
    }

    function handleInfo(bool) {
        setIsInfoOpen(bool)
    }

    function handleModal() {
        setIsOpen(!isOpen)
    }

    function handleSideInfo(state) {
        if (state === 'close') {
            sideInfo.current.style.right = '-300px'
            setTimeout(()=>sideInfo.current.style.display = 'none',300)
            return
        }
        if (state === 'open') {
            sideInfo.current.style.display = 'flex'
            setTimeout(()=>sideInfo.current.style.right = '0px',10)
        }
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
                                <li><StyledNavLink to='/'>HOME 1</StyledNavLink></li>
                                <li><StyledNavLink to='/'>HOME 2</StyledNavLink></li>
                                <li><StyledNavLink to='/'>HOME 3</StyledNavLink></li>
                            </ul>
                        </li>
                        <li><StyledNavLink to="/about">ABOUT</StyledNavLink></li>
                        <li><StyledNavLink to="/menu">MENU</StyledNavLink></li>
                        <li><StyledNavLink to="/reservation">RESERVATION</StyledNavLink></li>
                        <li className='headNav'><StyledNavLink to="/">PAGES</StyledNavLink>
                            <ul className="homeSubNav subNav">
                                <li><StyledNavLink to='/blog'>BLOG</StyledNavLink></li>
                                <li><StyledNavLink to='/blog/details'>BLOG DETAILS</StyledNavLink></li>
                                <li><StyledNavLink to='/chefs'>CHEFS</StyledNavLink></li>
                                <li><StyledNavLink to='/faq'>FAQ</StyledNavLink></li>
                                <li><StyledNavLink to='/story'>STORY</StyledNavLink></li>
                                <li><StyledNavLink to='/gallery'>GALLERY</StyledNavLink></li>
                            </ul>
                        </li>
                        <li className='headNav'><StyledNavLink to="/">SHOP</StyledNavLink>
                            <ul className="homeSubNav subNav">
                                <li><StyledNavLink to='/shop'>SHOP</StyledNavLink></li>
                                <li><StyledNavLink to='/shop/details'>SHOP DETAILS</StyledNavLink></li>
                                <li><StyledNavLink to='/shop/cart'>SHOP CART</StyledNavLink></li>
                                <li><StyledNavLink to='/shop/checkout'>SHOP CHECKOUT</StyledNavLink></li>
                                <li><StyledNavLink to='/shop/wishlist'>SHOP WISHLIST</StyledNavLink></li>
                            </ul>
                        </li>
                        <li><StyledNavLink to="/contact">CONTACT</StyledNavLink></li>
                    </ul>
                </div>
                <div className="iconsDiv">
                    <i className={`fa-solid fa-${isOpen ? 'xmark' : 'magnifying-glass'}`} onClick={()=>handleModal('close')}></i>
                    <i className="fa-solid fa-bars" onClick={()=>handleSideInfo('open')}></i>
                    <i className="fa-solid fa-basket-shopping basket_icon" onClick={handlePosition}><div className="basketProductCount">{Count}</div></i>

                    <div className="searchForm" style={!isOpen ? { display: 'none' } : { display: 'block' }}>
                        <div className="searchBox">
                            <input id='searchFromInput' placeholder='Search Keywords' type="text" />
                            <i className="fa-solid fa-magnifying-glass searchFromIcon"></i>
                        </div>
                    </div>
                </div>
                <div className="sideInfo" ref={sideInfo}>
                    <div className="sideInfoTitleBox">
                        <div className="sideInfoNav">
                            <div className="sideInfoMenuBtn sideInfoBtns" onClick={() => handleInfo(false)} style={isInfoOpen ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }}><span>MENU</span></div>
                            <div className="sideInfoInfoBtn sideInfoBtns" onClick={() => handleInfo(true)} style={!isInfoOpen ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }}><span>INFO</span></div>
                        </div>
                        <div className="sideInfoHead">
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png" alt="" />
                            <i className="fa-solid fa-xmark sideInfoQuit" onClick={()=>handleSideInfo('close')}></i>
                        </div>
                    </div>
                    
                    <div className="sideInfoTextBox" >
                        { isInfoOpen ? <SideInfo/> : <HideSideInfo/> }
                        { isInfoOpen ? <HideSideMenu/> : <SideMenu/> }
                    </div>
                </div>
                <SideBasket/>
            </div>
        </nav>
    )
}

export default Navbar