import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <section id='footer' className='f-wrapper'>
            <div className="paddings innerWidth flexCenter f-container">

                {/* left side */}
                <div className="flexColStart f-left">
                    <span className='logo2'>
                        Rlestate
                    </span>
                    <span className="secondaryText">
                        Our vision is to make all people <br />
                        the best place to live for them.
                    </span>
                </div>

                {/* right side */}
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondarytext'>145 New York, FL 4571, USA</span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
