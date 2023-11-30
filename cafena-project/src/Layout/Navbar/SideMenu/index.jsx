import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function SideMenu() {


  const StyledNavLink = styled(NavLink)`
    font-size: 16px;
    transition: 0.3s;

    &:hover{
      color: #cd8d16;
    }
  `

  return (
    <div>
      <ul className='sideNav'>
        <li><StyledNavLink><h5>HOME</h5></StyledNavLink><i className="dropdownPlus fa-solid fa-plus"></i></li>
        <li><StyledNavLink><h5>ABOUT</h5></StyledNavLink></li>
        <li><StyledNavLink><h5>MENU</h5></StyledNavLink></li>
        <li><StyledNavLink><h5>RESERVATION</h5></StyledNavLink></li>
        <li><StyledNavLink><h5>PAGES</h5></StyledNavLink><i className="dropdownPlus fa-solid fa-plus"></i></li>
        <li><StyledNavLink><h5>SHOP</h5></StyledNavLink><i className="dropdownPlus fa-solid fa-plus"></i></li>
        <li><StyledNavLink><h5>CONTACT</h5></StyledNavLink></li>
      </ul>
    </div>
  )
}

export default SideMenu