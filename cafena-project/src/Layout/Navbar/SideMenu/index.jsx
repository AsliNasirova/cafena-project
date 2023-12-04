import React, { useRef } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function SideMenu() {

  const subHome = useRef()
  const subPages = useRef()
  const subShop = useRef()


  const StyledNavLink = styled(NavLink)`
    font-size: 16px;
    transition: 0.3s;

    &:hover{
      color: #cd8d16;
    }
  `

  function handleDropdownHome() {
    subHome.current.classList.toggle('active')

  }

  function handleDropdownPages() {
    subPages.current.classList.toggle('active')

  }

  function handleDropdownShop() {
    subShop.current.classList.toggle('active')

  }

  return (
    <div>
      <ul className='sideNav'>
        <li><StyledNavLink to='/'><h5>HOME</h5></StyledNavLink><i onClick={handleDropdownHome} className="dropdownPlus fa-solid fa-plus"></i></li>
        <li>
          <ul className='sideSubNav subHome' ref={subHome}>
            <li><StyledNavLink to='/'>HOME 1</StyledNavLink></li>
            <li><StyledNavLink to='/'>HOME 2</StyledNavLink></li>
            <li><StyledNavLink to='/'>HOME 3</StyledNavLink></li>
          </ul>
        </li>
        <li className='defaultList'><StyledNavLink to='/about'><h5>ABOUT</h5></StyledNavLink></li>
        <li className='defaultList'><StyledNavLink to='/menu'><h5>MENU</h5></StyledNavLink></li>
        <li className='defaultList'><StyledNavLink to='/reservation'><h5>RESERVATION</h5></StyledNavLink></li>
        <li><StyledNavLink to='/pages'><h5>PAGES</h5></StyledNavLink><i onClick={handleDropdownPages} className="dropdownPlus fa-solid fa-plus"></i></li>
        <li>

          <ul className='sideSubNav subPages' ref={subPages}>
            <li><StyledNavLink to='/blog'>BLOG</StyledNavLink></li>
            <li><StyledNavLink to='/blog/details'>BLOG DETAILS</StyledNavLink></li>
            <li><StyledNavLink to='/chefs'>CHEFS</StyledNavLink></li>
            <li><StyledNavLink to='/faq'>FAQ</StyledNavLink></li>
            <li><StyledNavLink to='/story'>STORY</StyledNavLink></li>
            <li><StyledNavLink to='/gallery'>GALLERY</StyledNavLink></li>
          </ul>

        </li>
        <li><StyledNavLink to='/shop'><h5>SHOP</h5></StyledNavLink><i onClick={handleDropdownShop} className="dropdownPlus fa-solid fa-plus"></i></li>
        <li>
          <ul className='sideSubNav subShop' ref={subShop}>
            <li><StyledNavLink to='/shop'>SHOP</StyledNavLink></li>
            <li><StyledNavLink to='/shop/details'>SHOP DETAILS</StyledNavLink></li>
            <li><StyledNavLink to='/shop/cart'>SHOP CART</StyledNavLink></li>
            <li><StyledNavLink to='/shop/checkout'>SHOP CHECKOUT</StyledNavLink></li>
            <li><StyledNavLink to='/shop/wishlist'>SHOP WISHLIST</StyledNavLink></li>
          </ul>
        </li>
        <li><StyledNavLink to='/contact'><h5>CONTACT</h5></StyledNavLink></li>
      </ul>
    </div>
  )
}

export default SideMenu