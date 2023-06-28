import React from 'react'
import './value.css'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown}  from 'react-icons/md'
import data from '../../utils/accordion'



export default function Value() {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>

            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>
                    We always ready to help by providing the best service for you.
                    <br />
                    We beleive a good place to live can make your life better
                </span>

                <Accordion
                allowMultipleExpanded={false} 
                preExpanded={[0]}
                >
                    {
                        data.map((item, i) => {
                            return(
                                
                            )
                        })
                    }
                </Accordion>
            </div>

        </div>
    </section>
  )
}
