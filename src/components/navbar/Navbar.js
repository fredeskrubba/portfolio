import React from 'react'
import {ReactComponent as HomeIcon} from '../../assets/icons/home-icon.svg'
import {ReactComponent as ContactIcon} from '../../assets/icons/contact-icon.svg'
import {ReactComponent as BurgerIcon} from '../../assets/icons/burger-icon.svg'
import '../../styles/navbar-mobile.css'
import '../../styles/navbar-desktop.css'
import { Link, useRoute, useLocation } from 'wouter'
import { useBurgerStore } from '../stores/useBurgerStore'
import { useEffect } from 'react'

// component for making links active depending on current page
const ActiveLink = props => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "active" : ""}>{props.children}</a>
    </Link>
  );
};

const Navbar = ({scrollToContact, scrollToAbout}) => {
  const {visible, setVisible, burgerClass, setBurgerClass} = useBurgerStore()
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to homepage
    setLocation("/");
      

  }, []);
  return (
    <nav>
      <section className='navbar-mobile'>
            <Link href='/'>
                  <HomeIcon className='home-button nav-button'/>
            </Link> 
            <div className='nav-divider'></div>
            
                  <ContactIcon className='contact-button nav-button' onClick={()=>{scrollToContact()}}/>
            
            <div className='nav-divider '></div>           
            <BurgerIcon className='nav-button burger-button' onClick={
              
              ()=>{
                burgerClass === 'link-menu' ? setBurgerClass('link-menu-visible') : setBurgerClass('link-menu')
                visible === 'burger-menu' ? setVisible('burger-menu-visible') : setVisible('burger-menu')
              }
            }/>
      </section>
      <section className='navbar-desktop'>
            <ActiveLink href='/'>Hjem</ActiveLink>
            <article>
              <p onClick={()=>{scrollToAbout()}} className='navigation-button'>Om</p>
              <ActiveLink href='/projects'>Projekter</ActiveLink>
              <p onClick={()=>{scrollToContact()}} className='navigation-button'>Kontakt</p>
            </article>
      </section>
    </nav>
  )
}

export default Navbar