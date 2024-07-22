import React, { useState, useRef, useEffect } from 'react';
import tooltips from '../data/tooltipsText';
import {useAssistant} from '../Providers/AssistantProvider'




const ToolTip = ({children, id}) => {  
    
    const [tooltipdata, setToolTipDada] = useState({})   

    const [assistantActive, setAssistantActive] = useAssistant();
   
    //  Muestra oculta el tooltip al hacer click en el componente. 
    const [isOpen, setIsOpen] = useState(false);  

    const searchToolTip = () => {
         let info = tooltips.find(tooltip => tooltip.id === id)
         
         if (info) {
            setToolTipDada(info)
         }

        //  setToolTipDada(tooltips.find(tooltip => tooltip.id === id))
        
    }

    

        
        
        const toggleTooltip = () => {
        // Solo se muestra los tooltips si esta activo el asistente.    
            if (assistantActive) {
                setIsOpen(!isOpen)
                searchToolTip(id) 
            }   
        }
        
        
        return (    
                
                <div className='relative' onClick={toggleTooltip}> 
                    {children}

                {isOpen && 
                    <div className="absolute bg-primary z-50 left-1/2  transform -translate-x-1/2 mt-6 w-60 sm:w-72 md:w-80 px-4 py-2 rounded-lg shadow-lg border border-primary transition-all duration-300 ease-in-out" role="tooltip">            
                        <div className="text-white text-sm font-medium mb-2">                {tooltipdata.title}           </div>            
                            <p className="text-white text-xs">                {tooltipdata.description}           </p>            
                                <div className="w-3 h-3 bg-primary border-t border-l border-primary rotate-45 absolute left-1/2 transform -translate-x-1/2" style={{top: '-7px'}}>
                                </div>          
                            </div> 
                }
                </div>
                      
            )

};
    
        
    export default ToolTip;