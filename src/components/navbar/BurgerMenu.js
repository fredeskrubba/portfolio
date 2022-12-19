import React from 'react'
import { Link } from 'react-router-dom'


const BurgerMenu = ({visible}) => {
  return (
    <section className='burger-menu' style={{display: visible}}>
        <article className='link-menu'>
            <Link to='om'>Om Mig</Link>
            <Link to='projekter'>Mine Projekter</Link>
            <Link to='cases'>Mine Cases</Link>
        </article>
    </section>
  )
}

export default BurgerMenu