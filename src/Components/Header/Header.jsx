import React, { useState } from 'react'
import './header.css'
import { BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

export default function Header() {

  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened)=> {
    if(document.documentElement.clientWidth <= 800){
      return{
        right: !menuOpened && "-100%"
      }
    }
  }

  return (
    <section className='h-wrapper'>
      <div className='h-container flexCenter paddings innerWidth'>
        
        <span className='logo'>
          Rlestate
        </span>

        <OutsideClickHandler
        onOutsideClick={() => {
          setMenuOpened(false)
        }}
        >
          <div className='h-menu flexCenter'
          style={getMenuStyles(menuOpened)}
          >
            <a href="#residencies">Residencies</a>
            <a href="#contact">Contact Us</a>
            <a href="#footer">Get started</a>
            <button className='button'>
              <a href="">Contact</a>
            </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  )
}
