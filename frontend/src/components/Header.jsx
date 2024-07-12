import React from 'react'
import Icon from './Icon/Icon'

const Header = () => {
  return (
    
   <div className='bg-primary w-full h-[96px] justify-center  text-white flex items-center '>
        <div className='flex justify-center grow'>
        <Icon type='Logo'/>
        </div>

        <div className='flex gap-2 mr-3'>                     
        <p className=''>Ayuda </p>
        <Icon type='Warning'/>
        </div>        
  </div>

  )
}

export default Header