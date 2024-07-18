import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon/Icon'

import {useAssistant} from '../Providers/AssistantProvider'

const Header = () => {

  
  const [assistantActive, setAssistantActive] = useAssistant();

  console.log('>> assi', assistantActive);
  

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
        <p className=''>Ayuda {assistantActive && <span> activada </span>} </p>
          <Icon type='Warning'/>
        </button>
        </div>        
  </div>

  {/* {showAssistant && <div> <VirtualAssintanModal/> </div> } */}
  


  

  
  
  </>

  )
}

export default Header