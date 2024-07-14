import React from 'react'
import Header from '../../components/Header'

const AmountDetails = () => {

  const data = {
    balance: '5435,00'
  }

  return (
    <>

    
    
    <div className='flex flex-col items-center justify-between min-h-screen'>

    

    <Header/>
    
    <h2 className='text-center text-2xl font-medium mt-4'> Ingresa el monto a transferir </h2>
    
    <div className=' flex flex-col text-center spacey-y-6 flex-grow w-11/12 mt-20'>

        <input 
          type="number"
          className='text-5xl text-center '
          placeholder="$0,00 usd"
          min="0"
          // step="0.01"
        />

      <p> Monto disponible ${data.balance} usd </p>

    </div>

    



    {/* <div className='w-full px-6 pb-4'>
        <div className='flex justify-end gap-3 items-center'>
          <p> Atras </p>
          <button className='bg-primary text-white  py-2 px-8 rounded-lg shadow' > Confirmar </button>
          </div>
      </div> */}

      
    </div>
    </>
  )
}

export default AmountDetails