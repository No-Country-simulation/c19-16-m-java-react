import React from 'react'
import Header from '../../components/Header'
import user1Photho from '../../assets/Images/user1.jpg'

const Success = () => {

  const successData = {
    image: '', 
    amount: '$120,00 usd',
    beneficiaryName: 'Ana Morales',
    bankName: 'Banco BBVA',
    UBAN: '0105697501000004261522'
  }

  return (

    <> 

      
    
      <div className='flex flex-col items-center justify-between min-h-screen'>

      <Header/>

        <div className='text-center spacey-y-6 flex-grow mt-7'>
          
          <h2 className='text-center'> ¡Listo! </h2>
          <p> Transferencia realizada a: </p>
          
          <div className='mt-6 flex justify-center mb-6'>
            <img src={user1Photho} alt="" />
          </div> 
          
          <div>
            <span > {successData.amount} </span>        
            <p id='beneficiary'> {successData.beneficiaryName} </p>
            <p id='bank'> {successData.bankName} </p>
            <p> UBAN: {successData.UBAN} </p>
          </div>

        </div>
        

        {/* <div className='w-full px-6 pb-4'>
          <div className='flex justify-end gap-3 items-center'>
            <p> Compartir </p>
            <button className='bg-primary text-white  py-2 px-8 rounded-lg shadow' > Finalizar </button>
            </div>
        </div> */}



      </div>

    

    </>
  )
}

export default Success