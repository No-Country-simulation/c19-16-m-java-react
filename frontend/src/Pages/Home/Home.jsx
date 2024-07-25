
import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';


import { } from 'react-icons/bi';
import profilePicture from '../../assets/Images/Photo.jpg'
import '../../css/main.css'
import Header from '../../components/Header';

import VirtualAssistantModal from '../../components/VirtualAssistantModal';
import ToolTip from '../../components/ToolTip'

import Icon from '../../components/Icon/Icon';
import { Link } from 'react-router-dom';
import {useAssistant} from '../../Providers/AssistantProvider'
import tooltips from '../../data/tooltipsText'
import users from '../../data/data'
import Footer from '../../../src/components/Footer'

// FIXME: Cuando este el back. Quitarlo. 
import { useUser} from '../../Providers/UserProvider';






const Home = () => {

    const [user, setsetUser] = useUser()




    const [assistantActive, setAssistantActive] = useAssistant();

    const [isVisible, setVisible] = useState(true)


    return (
        <> 

        
         
         {assistantActive && <VirtualAssistantModal/> }

        <div className='main'>
       
            <Header />


            <section id='main-container' className='flex flex-col  items-center space-y-5 '>
                <div className='flex justify-around items-center gap-5' >

                    <div className='flex items-center justify-center gap-10 pt-3'>
                        <div className='flex flex-col'>

                            <h3 
                                className='text-base font-medium '> 
                                Bienvenida 
                                
                            </h3>                            
                            

                            <ToolTip id={'userName'}> 
                                <span className='text-xl text-primary text-[24px]'> {user.name} {user.surname} </span>
                            </ToolTip>
                                



                        </div>
                        
                        <div className='relative'>
                            
                        <ToolTip id={'userPhoto'}> 
                            <img src={profilePicture} className='h-[120px] w-[120px]' alt="" />
                        </ToolTip>
                                                        
                               
                            
                        </div>
                    

                    </div>



                </div>

                <section id='account-info'>
                    <p> El saldo actual de tu cuenta es </p>
                    <ToolTip id={'balanceDisplay'}>  
                        <p className='text-[36px]'> {user.balance} </p>
                    </ToolTip>
                </section>

                <p> ¿Que quieres hacer hoy? </p>


                <section id='operations-buttons' className='flex justify-center w-[90%]'>

                    <div className="w-11/12 max-w-screen-lg mx-auto grid grid-cols-2 gap-4">

                        {/* Boton Ver mis movimientos */}    
                        <ToolTip id={'TransactionsBtn'}> 
                        <div>
                            <div className="flex flex-col items-center justify-center  bg-lightGrey text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
                                <Icon type={"Transactions"} />

                            </div>
                            <p className='text-center text-sm pt-1'> Ver mis movimientos </p>
                        </div>
                        </ToolTip>

                        {/* Boton Transfers */} 
                        <ToolTip id={'TranfersBtn'}> 
                        <div>
                            <Link to="/Transfers" > <div className="flex flex-col items-center justify-center bg-lightGrey  text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">

                                <Icon type={"Transfers"} />
                            </div>
                                <p className='text-center text-sm pt-1'> Hacer transferencias </p>
                            </Link>
                        </div>
                        </ToolTip>

                        {/* Boton Pago por Servicios */} 
                        <ToolTip id={'payforServicesBtn'}>
                        <div>
                            <Link to="/Pay"> 
                            <div className="flex flex-col items-center justify-center bg-lightGrey  text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
                                <Icon type={"Services"} />

                            </div>
                                <p className='text-center text-sm pt-1'> Pagar mis servicios </p>
                            </Link>
                        </div>
                        </ToolTip>
                        
                        {/* Boton Products */} 
                        <ToolTip id={'TransationsBtn'}> 
                        <div>
                            <div className="flex flex-col items-center justify-center bg-lightGrey  text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
                                <Icon type={"Products"} />
                            </div>
                            <p className='text-center text-sm pt-1'> Ver mis productos </p>
                        </div>
                        </ToolTip>


                    </div>



                </section>




            </section>


        </div>

        <Footer/>

        </>

    )
}

export default Home