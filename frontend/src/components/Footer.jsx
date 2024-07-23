import React from 'react'
import Icon from '../components/Icon/Icon'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    
    <footer className='bg-primary w-full flex justify-around p-3  h-[80px] '>
      <Link to='/Home'>  <Icon type="House"/ >  </Link>
      <Link to='/Transfers'> <Icon type="TransfersFooter"/ > </Link>      
      <Link to='/Pay'> <Icon type="ServicesFooter"/ > </Link>      
      <Link to='/Profile'> <Icon type="Profile"/ >   </Link>      
    </footer>
  )
}

export default Footer