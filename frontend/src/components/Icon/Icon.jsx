
import Logo from "./Logo.svg?react";
import Warning from './Warning.svg?react'

// ...

export default function Icon({type}) {
    return (
        <>
        
        {type === "Logo" && <Logo/> }
        {type === "Warning" && <Warning/> }
        
        </>
            
        
    );
}