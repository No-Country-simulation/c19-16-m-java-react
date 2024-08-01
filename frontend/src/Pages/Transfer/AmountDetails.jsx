import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import axiosInstance from '../../axiosConfig';

const AmountDetails = ({updateFormData, setIsValidForm, accountInfo}) => {

  
  console.log('accountInfo > ', accountInfo);
  
  const [amount, setAmount] = useState(0)
  const [amountError, setAmountError] = useState('')
  const [user, setsetUser] = useState()

  useEffect(() => {  

    console.log('amount ', amount);

    if (amount > 0  && !amountError ) {            
      updateFormData({'amount': amount })
      setIsValidForm(true)      
    } else {
      setIsValidForm(false)          
    }  
  
}, [amount])


useEffect(() => {              
  
  const id = localStorage.getItem('id')
  console.log('id = ', id);                        
  getUserInfo(id).then((data) => setsetUser(data)) 

async function  getUserInfo(id) {
  const response = await axiosInstance.get(`/users/getUser/${id}`)
  console.log('response ', response);
  return response.data
}

}, [])



  const handleAmount = (event) => {

    let importe = parseInt(event.target.value)   

    setAmount(importe)

    if (importe <= 0 ) {
      setAmountError('El importe debe ser mayor que cero')
    } else if (importe > data.balance) {
      setAmountError('El importe debe ser inferior o igual al Monto')
    }

    console.log('amountError > ', amountError);




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
          onBlur={handleAmount}

          // step="0.01"
        />

      <p> Monto disponible ${user?.accounts[0].Balance} usd </p>

      {amountError && <div> <p className='text-sm text-red-600'> {amountError} </p> </div> }

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