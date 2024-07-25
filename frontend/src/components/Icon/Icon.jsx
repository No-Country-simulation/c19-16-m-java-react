import Logo from "./Logo.svg?react";
import Warning from './Warning.svg?react'

import Home from './Home.svg?react'
import Traferir from './Trasferir.svg?react'
import Transactions from './Transactions.svg?react'
import Transfers from './Transfers.svg?react'
import Services from './Services.svg?react'
import Products from './Products.svg?react'
import StarFilled from './StarFilled.svg?react'
import KebabMenu from './KebabMenu.svg?react'
import SwitchOn from './Switch-on.svg?react'
import SwitchOff from './Switch-off.svg?react'
import Profile from './Profile.svg?react'

// Footer Icons
import House from './House.svg?react'
import TransfersFooter from './TransfersFooter.svg?react'
import ServicesFooter from './ServicesFooter.svg?react'
import TrashCan from './TrashCan.svg?react'

export default function Icon({type}) {
    return (
        <>
        
        {type === "Logo" && <Logo/> }
        {type === "Warning" && <Warning/> }

        {type === "Home" && <Home/>}
        {type === "Traferir" && <Traferir/>}
        {type === "Transactions" && <Transactions/>}
        {type === "Transfers" && <Transfers/>}
        {type === "Services" && <Services/>}
        {type === "Products" && <Products/>}
        {type === "StarFilled" && <StarFilled/>}
        {type === "KebabMenu" && <KebabMenu/>}
        {type === "SwitchOn" && <SwitchOn/>}
        {type === "SwitchOff" && <SwitchOff/>}

        {type === "House" && <House/>}
        {type === "TransfersFooter" && <TransfersFooter/>}
        {type === "ServicesFooter" && <ServicesFooter/>}
        {type === "Profile" && <Profile/>}
        {type === "TrashCan" && <TrashCan/>}
        
        </>
            
        
    );
}