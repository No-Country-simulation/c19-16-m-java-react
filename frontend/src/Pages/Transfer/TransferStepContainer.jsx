
import AccountDetails from '../Transfer/AccountDetails.jsx'
import AmountDetails from '../Transfer/AmountDetails.jsx'
import Confirmation from '../Transfer/Confirmation.jsx'
import Success from '../Transfer/Success'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../src/axiosConfig'
import { useUser } from '../../Providers/UserProvider.jsx'
// import useTranfer from '../../Hooks/useTranfer';



const TransferStepContainer = () => { 


  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const [user, setUser] = useUser();

  const [formData, setFormData] = useState({
    'Iban': '',
    'contactName': '',
    'bankName': '',
    'amount': 0
  })

  useEffect(() => {              
  
    if (!user) {
      console.log('No tengo el usuario... ');
      const id = localStorage.getItem('id')
      console.log('id = ', id);
      getUserInfo(id).then((data) => setUser(data))
    }

    
                            
     
  
  async function  getUserInfo(id) {
    const response = await axiosInstance.get(`/users/getUser/${id}`)
    console.log('response ', response);
    return response.data
  }
  
  }, [])
  

  const [destAccount, setDestAccount] = useState();




  async function getAccountInfo(IBAN) {    

    console.log('estoy en getAccountInfo');
    console.log('IBAn::: ', IBAN);
    
    try {
      
      const response = await axiosInstance.get(`/accounts/get-account-by-IBAN/${IBAN}`)  
      
      console.table('response.data > ', response.data);


      // Existe en IBAN destino en la base de datos
      if (response.status == 200) {
        console.log('Entro en correcto...');
        setDestAccount(response.data)
        return (null)
      } else {        
        return 'El IBAN no es correcto o no exixte'
      }
    
    } catch (error) {
      
      console.log('Error: ', error);
      setIsValidForm(false)
      return error.response.data.error
    }
    
  }



  const stepButtons = [
    { 'id': 1,  stepName: 'AccountDetails', buttonName: 'Siguiente'}, 
    { 'id': 2,  stepName: 'AmountDetails', buttonName:  'Siguiente'}, 
    { 'id': 3,  stepName: 'Confirmation', buttonName:   'Confirmar'}, 
    { 'id': 4,  stepName: 'Sucess', buttonName: 'Finalizar'}, 
  ]



  const [isValidForm, setIsValidForm] = useState(false)





  const updateFormData = (data) => {


    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
    }));
    
   

  }


   
    
  const nextStep = () => {


    if (isValidForm) { 
      setStep(step + 1)
    }

  }

  const prevStep = () => {
    setStep(step - 1)
  }





  const renderStepComponent = () => {
    switch (step) {

      case 1:
        return <AccountDetails updateFormData={updateFormData} setIsValidForm={setIsValidForm} getAccountInfo={getAccountInfo}/>

      case 2:
        return <AmountDetails updateFormData={updateFormData} setIsValidForm={setIsValidForm} accountInfo={destAccount}/>

      case 3:
        return <Confirmation data={formData} accountInfo={destAccount} user={user}/>

      case 4:
        
        return <Success data={formData} accountInfo={destAccount} user={user}/>

      default:
        return navigate('/home')

    }


  }



  return (
    <div>

      {renderStepComponent()}

      <div className='w-full px-6 pb-4 mt-auto'>
        <div className='flex justify-end gap-3 items-center'>
          
          { stepButtons[step-1].stepName != 'Sucess' 
            ? <button onClick={prevStep}> Atras </button>
            : <button> Compartir </button>
          }
          
          <button 
            className={` ${isValidForm ? 'bg-primary': 'bg-darkGrey'} text-white  py-2 px-8 rounded-lg shadow`} 
            onClick={nextStep}> {stepButtons[step-1].buttonName }  
          </button>



        </div>
      </div>


    </div>
  )
}

export default TransferStepContainer