import React from 'react'
import Seperator from './components/Seperator/Seperator';
import AccordionCompound from './compounds/AccordionCompound';
import FirstFormCompound from './compounds/FirstFormCompound';
import FooterCompound from './compounds/FooterCompound';
import HeaderCompound from './compounds/HeaderCompound'
import JumboCompound from './compounds/JumboCompound';
import OptFormCompound from './compounds/OptFormCompound'

function HomePage() {
    return (
        <>
         <HeaderCompound>
            <FirstFormCompound />
         </HeaderCompound>
         <Seperator />
         <JumboCompound />
         <AccordionCompound />
         <OptFormCompound/>
         <Seperator />
         <FooterCompound />
        </>
    );
}

export default HomePage
