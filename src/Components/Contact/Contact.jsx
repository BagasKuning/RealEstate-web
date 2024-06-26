import React from 'react'
import './contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

export default function Contact() {
  return (
    <section id='contact' className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primarytext'>Easy To Contact</span>
                <span className='secondaryText'>
                    We always ready to help by providing the best service for you.
                    We beleive a good place to live can make your life better

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/> 
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 823 238 12</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Call Now
                                </div>
                            </div>

                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/> 
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 823 238 12</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Chat Now
                                </div>
                            </div>


                            </div>

                            {/* thrid mode */}
                            <div className="flexStart row">

                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25}/> 
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primaryText'>Video Call</span>
                                            <span className='secondaryText'>021 823 238 12</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Video Call Now
                                    </div>
                                </div>


                                {/* fourth mode */}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size={25}/> 
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primaryText'>Massage</span>
                                            <span className='secondaryText'>021 823 238 12</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Massage Now
                                    </div>
                                </div>
                            </div>


                    </div>
                </span>
            </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
