import React from 'react'
import './header.css'

export default function Header() {
  return (
    <section className='h-wrapper'>
      <div className='h-container flexCenter paddings innerWidth'>
        
        <img src="./logo.png" alt="alt" width={100} />

        <div className='h-menu flexCenter'>
          <a 
          href=""
          ></a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get started</a>
          <button className='button'>
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  )
}
