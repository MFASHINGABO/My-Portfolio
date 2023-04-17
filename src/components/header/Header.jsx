import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/prince.jpeg'
import HeaderSocials from './HeaderSocials'


const Header = ()=> {
  return (
    <header>
      <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Prince MFASHINGABO</h1>
       <h5 className="text-light">Ui/Ux | FullStack | Mobile Dev | DevOps</h5>
       <CTA/>
        <HeaderSocials/>

          <div className="me"> 
            <img src={ME} alt="me"/>
          </div>

          <a href="#contact" className="scroll__down">Schroll Down</a>
      </div>
    </header>
  )
}

export default Header