import React from 'react'
import Header from '../../components/Header'
import user1Photho from '../../assets/Images/user1.jpg'




const Confirmation = ({data}) => {

  //FIXME: Sustituir el objeto por lo recuperado en el back. 

  console.log(data);

  return (
    <> 

      
    
    <div className='flex flex-col items-center justify-between min-h-screen'>

    <Header/>

    <h2 className='text-center text-2xl font-medium mt-4'> Confirmar transferencia </h2>

      <div className='text-center spacey-y-6 flex-grow mt-7 w-11/12 '>       
        
        
        <div className='flex items-center mt-14 gap-4 '> 
          <div className='mt-6 flex justify-center mb-6'>
            <img src={user1Photho} alt="" />
          </div> 
          
          <div className='text-left'>
            <span id='amount' className='text-2xl font-medium text-primary'> {data.amount} </span>        
            
            {/* FIXME: Sustituir por los datos de la cuenta */ }
            <p  id='beneficiary'>  </p>
            <p className='text-sm' id='bank'>  </p>
            
            <p className='text-sm'> UBAN: {data.Iban} </p>
          </div>

        </div>

      </div>
      




    </div>

  

  </>
  )
}

export default Confirmation