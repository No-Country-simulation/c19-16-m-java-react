import React from 'react'
import Header from '../../components/Header'
import user1Photho from '../../assets/Images/user1.jpg'

const Success = ({data}) => {


  // FIXME: Borrar esto. 
  // 'Iban': '',
  // 'contactName': '',
  // 'bankName': '',
  // 'amount': 0


  return (

    <> 

      
    
      <div className='flex flex-col items-center justify-between min-h-screen'>

      <Header/>

        <div className='text-center spacey-y-6 flex-grow mt-7'>
          
          <h2 className='text-center text-[22px]'> ¡Listo! </h2>
          <p> Transferencia realizada a: </p>
          
          <div className='mt-6 flex justify-center mb-6'>
            <img src={user1Photho} alt="" />
          </div> 
          
          <div>
            <span className='text-[22px]'> {data.amount} </span>        
            <p id='beneficiary' className='text-[16px]' > {data.contactName ? data.contactName : 'Beneficiario no informado'} </p>
            <p id='bank' className='text-[12px]'> {data.bankName ? data.bankName : 'Banco destino no informado'} </p>
            <p className='text-[12px]'> UBAN: {data.Iban} </p>
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