
import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon/Icon'

import {useAssistant} from '../Providers/AssistantProvider'

const Header = () => {

  
  const [assistantActive, setAssistantActive] = useAssistant();

  
  

  const activeAssistant = () => {
    setAssistantActive(!assistantActive)
  }

  return (
    

    <> 

    



   <div className='bg-primary w-full h-[96px] justify-center  text-white flex items-center '>
        <div className='flex justify-center grow'>
        <Icon type='Logo'/>        

        </div>

        <div className='flex gap-2 mr-3'>                     

        
        <button className='flex gap-2' onClick={activeAssistant}>

          <div className='flex items-center gap-2'> 
            <p className=''> Ayuda </p>           
            {assistantActive ?  <Icon type='SwitchOn'/> : <Icon type='SwitchOff'/> }
          </div>
          
        
        </button>
        </div>        
  </div>

  {/* {showAssistant && <div> <VirtualAssintanModal/> </div> } */}
  


  

  
  
  </>



  )
}

export default Header