
import Logo from "./Logo.svg?react";
import Warning from './Warning.svg?react'

import Home from './Home.svg?react'
import Traferir from './Trasferir.svg?react'
import Transactions from './Transactions.svg?react'
import Transfers from './Transfers.svg?react'
import Services from './Services.svg?react'
import Products from './Products.svg?react'


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

        
        </>
            
        
    );
}