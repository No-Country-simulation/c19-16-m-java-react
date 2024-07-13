import React from 'react'
import '../../css/main.css'
import Header from '../../components/Header'

const Transfer = () => {
  
  
  const transfers = [
    { image: 'user1', name: 'Ana Morales', Bank: 'Banco Bbva'
      
    }
  ]
  
  return (
    <> 
    <Header/>
    
    <div class='main '>  


      <div className='flex flex-col justify-center space-y-10'> 
      
        <h1 className='text-center mt-10'> Transferencias </h1>

        <div className="w-11/12 max-w-screen-lg mx-auto grid grid-cols-2 gap-4 ">
        
          <div> 
              <div className="flex flex-col items-center justify-center text-center bg-lightGrey text-black rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
              <span> Transferir a una nueva cuenta nacional </span>                
              </div>            
          </div>

          <div> 
              <div className="flex flex-col items-center justify-center text-center bg-lightGrey text-black rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
              <span> Transferir a una nueva cuenta internacional </span>                
              </div>            
          </div>       


      
        </div>

        <h2 className='text-center '> Transferencias frecuentes </h2>

        
      

      
      
      
      </div>   



      

     

    </div>  
        
    </>
  )
}

export default Transfer