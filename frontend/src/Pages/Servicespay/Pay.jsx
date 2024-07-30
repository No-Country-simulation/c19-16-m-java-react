import React, { useState } from 'react';
import '../../css/main.css'
import Header from '../../components/Header'
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { FiStar } from 'react-icons/fi';
import ServicioFoto from '../../assets/Images/servicio.png'
import Icon from '../../components/Icon/Icon'
import Footer from '../../components/Footer';
import useTranfer from '../../Hooks/useTranfer';
import { Link } from 'react-router-dom'
import VirtualAssistantModal from '../../components/VirtualAssistantModal';
import { useAssistant } from '../../Providers/AssistantProvider';
import ToolTip from '../../components/ToolTip';

const Pay = () => {


    const services = [

        { image: 'user1', name: 'compañia de luz', description: "description" },
        { image: 'user2', name: 'compañia de agua', description: "description" },
        { image: 'user3', name: 'compañia de gas', description: "description" },
        { image: 'user4', name: 'compañia de telefono', description: "description" },

    ]




    const [assistantActive, setAssistantActive] = useAssistant();

    const [isVisible, setVisible] = useState(true)



    const [searchQuery, setSearchQuery] = useState('');



    return (
        <>



            {assistantActive && <VirtualAssistantModal />}



            <Header />

            <div className='main '>


                <div className='flex flex-col justify-center space-y-10'>
                    <h1 className='text-center mt-10'> Pago de servicios </h1>
                    <div className="w-11/12 max-w-screen-lg mx-auto  ">

                        <ToolTip id={'PaynewService'}> <div>
                            <div className="flex flex-col items-center justify-center text-center bg-lightGrey text-black rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">

                                <Link to="/PayStepContainer"> <span> Pagar un nuevo servicio </span> </Link>
                            </div>
                        </div>
                        </ToolTip>
                    </div>

                    <h2 className='text-center '> Servicios frecuentes </h2>

                    <ToolTip id={'PagosFrecuentes'}>
                        <div className='flex items-center mx-auto bg-lightGrey rounded-full shadow-md overflow-hidden w-11/12'>
                            <FiSearch className='text-darkGrey mx-4' />
                            <input
                                type="text"
                                className='py-4 text-sm text-mediumGrey bg-lightGrey outline-none w-full'
                                placeholder='Buscar pagos de servicios frecuentes'
                            />
                        </div>
                    </ToolTip>
                    <div className='flex flex-col items-center space-y-6 '>

                        {services.map((service, index) => (

                            <div className='flex items-center  justify-between gap-5 mx-auto w-11/12 '>

                                <img src={ServicioFoto} className='w-[50px]' alt="" />

                                <div className='flex flex-col flex-grow  '>
                                    <h4 className=''> {service.name} </h4>
                                    <p className=''> {service.description} </p>
                                </div>

                                <div>
                                    <button>
                                        <Icon type={'KebabMenu'} />
                                    </button>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>


            </div>


            <Footer />

        </>
    )
}

export default Pay