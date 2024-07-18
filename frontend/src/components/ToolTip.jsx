import React, { useState, useRef, useEffect } from 'react';
import { FiInfo } from 'react-icons/fi';



const InteractiveTooltip = () => {  
    
    const [isOpen, setIsOpen] = useState(false);  
    const tooltipRef = useRef(null);  
    useEffect(() => {    
        const handleClickOutside = (event) => {      
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {       
                 setIsOpen(false);      
            }    
        };    
        document.addEventListener('mousedown', handleClickOutside);    
        return () => {      document.removeEventListener('mousedown', handleClickOutside);    

        };  }, []);  
        
        
        const toggleTooltip = () => setIsOpen(!isOpen);  
        
        
        return (    
        
        <div className="flex items-center justify-center min-h-screen bg-gray-100">      
        <div className="relative" ref={tooltipRef}>        
            <button          onClick={toggleTooltip}          
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"          aria-label="Abrir tooltip"        
            >          
            
            <FiInfo className="w-5 h-5" />        
            </button>        
            {isOpen && (          
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-60 sm:w-72 md:w-80 px-4 py-2 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out" role="tooltip">            <div className="text-gray-800 text-sm font-medium mb-2">                Información importante            </div>            <p className="text-gray-600 text-xs">                Este es un tooltip interactivo y accesible. Haz clic fuera de él para cerrarlo.            </p>            <div className="w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45 absolute left-1/2 transform -translate-x-1/2" style={{top: '-7px'}}></div>          </div>        )}      </div>      <style jsx>{`        @keyframes fadeIn {          from { opacity: 0; transform: translate(-50%, 10px); }          to { opacity: 1; transform: translate(-50%, 0); }        }      `}</style>    </div>  );};export default InteractiveTooltip;