import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { } from 'react-icons/bi';
import profilePicture from '../../assets/Images/Photo.jpg'
import '../../css/main.css'
import Header from '../../components/Header';
import VirtualAssistantModal from '../../components/VirtualAssistantModal';


import Icon from '../../components/Icon/Icon';
import { Link } from 'react-router-dom';
import {useAssistant} from '../../Providers/AssistantProvider'


const Home = () => {

    const data = {
        name: 'Marisol Domi',
        balance: "$5.435,00 usd"
    }

    const [assistantActive, setAssistantActive] = useAssistant();


    return (
        <> 
         
         {assistantActive && <VirtualAssistantModal/> }

        <div className='main'>
        
        
            
            <Header />


            <section id='main-container' className='container flex flex-col  items-center space-y-5 '>
                <div className='flex justify-around items-center gap-5' >

                    <div className='flex items-center justify-center gap-10 pt-3'>
                        <div className='flex flex-col'>
                            <h3 
                                className='text-base font-medium '> 
                                Bienvenida 
                                
                            </h3>
                            
                            <span className='text-xl text-primary text-[24px]'> {data.name} </span>
                        </div>
                        <img src={profilePicture} className='h-[120px] w-[120px]' alt="" />
                    </div>



                </div>

                <section id='account-info'>
                    <p> El saldo actual de tu cuenta es </p>
                    <p className='text-[36px]'> {data.balance} </p>
                </section>

                <p> ¿Que quieres hacer hoy? </p>


                {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">  */}

                {/* p-5 w-[95%] grid grid-cols-2 grid-rows-2 gap-4 */}

                <section id='operations-buttons' className='flex justify-center w-[90%]'>

                    <div className="w-11/12 max-w-screen-lg mx-auto grid grid-cols-2 gap-4">


                        <div>
                            <div className="flex flex-col items-center justify-center  bg-lightGrey text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
                                <Icon type={"Transactions"} />

                            </div>
                            <p className='text-center text-sm pt-1'> Ver mis movimientos </p>
                        </div>

                        <div>
                            <Link to="/Transfers" > <div className="flex flex-col items-center justify-center bg-lightGrey  text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">

                                <Icon type={"Transfers"} />
                            </div>
                                <p className='text-center text-sm pt-1'> Hacer transferencias </p>
                            </Link>
                        </div>

                        <div>
                            <Link to="/Pay"> <div className="flex flex-col items-center justify-center bg-lightGrey  text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
                                <Icon type={"Services"} />

                            </div>
                                <p className='text-center text-sm pt-1'> Pagar mis servicios </p>
                            </Link>
                        </div>

                        <div>
                            <div className="flex flex-col items-center justify-center bg-lightGrey  text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
                                <Icon type={"Products"} />



                            </div>
                            <p className='text-center text-sm pt-1'> Ver mis productos </p>

                        </div>



                    </div>



                </section>




            </section>


        </div>
        </>
    )
}

export default Home