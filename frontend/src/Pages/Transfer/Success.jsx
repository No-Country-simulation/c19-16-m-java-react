import React from 'react'
import Header from '../../components/Header'
import user1Photho from '../../assets/Images/user1.jpg'
import axiosInstance from '../../axiosConfig'
import { useEffect } from 'react'

const Success = ({data, accountInfo, user}) => {


  


  useEffect(() => {
    withdrawMoney()
  }, [])
    

  async function withdrawMoney() {

    console.log('descuento saldo ');
    try {

      const dataaxios = {amount: parseInt(data.amount)}  

      console.log('user ', user);
      
      const resp = await axiosInstance.put(`/accounts/withdraw-money/${user.accounts[0]._id}`, dataaxios)
      
      console.log('resp.status ', resp.status);
      console.log('resp.data ', resp.data);

      if (resp.status == 200) {
        console.log('Transferencia correcta');
      }
    
    } catch (error) {
      console.log('Error ->> ', error);
    }


  }


  return (

    <> 

      
    
      <div className='flex flex-col items-center justify-between min-h-screen'>

      <Header/>

        <div className='text-center spacey-y-6 flex-grow mt-7'>
          
          <h2 className='text-center text-[22px]'> ¡Listo! </h2>
          <p> Transferencia realizada a: </p>
          
          <div className='mt-6 flex justify-center mb-6'>
            <img className='border-[#00CD07] border-[5px] rounded-full' src={user1Photho} alt="" />
          </div> 
          
          <div>
            <span className='text-[22px]'> {data?.amount} </span>        
            <p id='beneficiary' className='text-[16px]' > {accountInfo.Holder ? accountInfo.Holder : 'Beneficiario no informado'} </p>
            <p id='bank' className='text-[12px]'> {accountInfo.Bank ? accountInfo.Bank : 'Banco destino no informado'} </p>
            <p className='text-[12px]'> UBAN: {data?.Iban} </p>
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