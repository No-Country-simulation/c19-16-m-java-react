import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import {useAssistant} from '../Providers/AssistantProvider'


const DeleteFavoriteTranstation = ({toggleModal, confirmDelete}) => {
//TODO: Codificar el botón borrar y cancelar (cerrar el modal)  
//TODO: Hacer limpieza de código lo que no se use, quitarlo. 
  
  const modalRef = useRef(null);
  const secondModal = useRef(null)
  const firstModal = useRef(null)
  
  const deleteTransation = (id) => {    
    
  }
  
  const hideModal = () => {
    modalRef.current.classList.toggle('hidden')
  }

  

  
    
  return (

    <> 
     
    <div
    className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center"
    
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
          Eliminar operacion favorita
        </h2>
      </div>


      {/* Dialog primera parte */}  
      <div ref={firstModal} className='visible'> 
      <p className="text-sm my-4 text-gray-600 text-center">
        ¿Estas seguro de querer eliminar esta operación?
      </p>
      <div className="mt-6 flex justify-center gap-3">

      <button
          className="bg-primary text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
          onClick={toggleModal}
        >
          Cancelar
        </button>

      
        <button
          className="bg-primary text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
          onClick={confirmDelete}
        >
          Eliminar
        </button>


      
      </div>
      </div>
      
      
    
    </div>
  </div>
    
  </>

  )
}

export default DeleteFavoriteTranstation