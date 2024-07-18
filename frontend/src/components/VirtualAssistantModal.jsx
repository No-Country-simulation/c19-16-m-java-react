import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import {useAssistant} from '../Providers/AssistantProvider'


const VirtualAssistantModal = () => {

  const handleClick = () => {
    console.log('He pulsado ayuda...');
  }
  
  const handleOutsideClick = () => {
  
  }
  
  const modalRef = useRef(null);
  const secondModal = useRef(null)
  const firstModal = useRef(null)
  
  const showNextText = () => {
    console.log('He pulsado en siguiente');
    secondModal.current.classList.toggle('hidden')
    firstModal.current.classList.toggle('hidden')
  }
  
  const showModal = () => {
    modalRef.current.classList.toggle('hidden')
  }
    
  return (
    <div
    className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center"
    onClick={handleOutsideClick}
    ref={modalRef}
  >
    <div
      
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4 md:mx-0 transform transition-all duration-300 ease-in-out"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      
      <div className="mb-4 w-full ">
        <h2 id="modal-title" className="text-xl font-semibold text-center text-primary">
          Asistente Virtual
        </h2>
      </div>


      {/* Dialog primera parte */}  
      <div ref={firstModal} className='visible'> 
      <p className="text-sm my-4 text-gray-600 ">
        Para obtener más información de cada elemento debes tocarlo una vez. Para activar su función debes tocarlo dos veces.
      </p>
      <div className="mt-6 flex justify-center">
      
        <button
          className="bg-primary text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
          onClick={showNextText}
        >
          Siguiente
        </button>
      
      </div>
      </div>
      {/* Dialog segunda parte */}
      <div className='hidden' ref={secondModal}> 
            <p className="text-sm my-4 text-gray-600 ">
            Si deseas desactivar el modo de asistencia, solo tienes que presionar de vuelta el boton, puedes acurrir a el tantas veces como lo requieras.
            </p>
            <div className="mt-6 flex justify-center">
            
                <button
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                onClick={showModal}
                >
                Comprendo
                </button>
            
            </div>
      </div>
    
    </div>
  </div>

  )
}

export default VirtualAssistantModal