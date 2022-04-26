import './navbar.scss'
import { useRef, useState } from 'react'

import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

import { Link } from 'react-router-dom';

import { useOutsideClick } from '../../helpers/outsideClick'



const MenuItems = () => {
  return (
    <div className="navbar__menu-items">
    <Link to="/">
    <div className="navbar__menu-item">
      <FcHome/>
      <span>Home</span>
    </div>
    </Link>
   <Link to="/search">
   <div className="navbar__menu-item">
      <BsSearch/>
      <span>Search</span>
    </div>
   </Link>
    <Link to="/search?purpose=for-sale">
    <div className="navbar__menu-item">
      <FcAbout/>
      <span>Buy Property</span>
    </div>
    </Link>
    <Link to="/search?purpose=for-rent">
    <div className="navbar__menu-item">
      <FiKey/>
      <span>Rent Property</span>
    </div>
    </Link>
  </div>
  )
}


const Navbar = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)

  const modalRef = useRef();

  useOutsideClick(modalRef, () => setActiveDropDown(false));


  return (
    <div className="navbar" >
      <div className="navbar__logo" >
        <Link to="/">Realtor</Link>
      </div>
      <div className="navbar__menu-wrapper" ref={modalRef} >
        <div className="navbar__menu-icon" onClick={e => setActiveDropDown(!activeDropDown)} >
          <FcMenu  />
        </div>
          {
            activeDropDown && <div className="modal" ><MenuItems /></div>
          }
      </div>
    </div>
  )
}

export default Navbar