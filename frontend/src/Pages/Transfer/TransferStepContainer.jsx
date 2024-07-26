
import AccountDetails from '../Transfer/AccountDetails.jsx'
import AmountDetails from '../Transfer/AmountDetails.jsx'
import Confirmation from '../Transfer/Confirmation.jsx'
import Success from '../Transfer/Success'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import useTranfer from '../../Hooks/useTranfer';



const TransferStepContainer = () => { 


 


 



  const [step, setStep] = useState(1)





  const [formData, setFormData] = useState({
    'Iban': '',
    'contactName': '',
    'bankName': '',
    'amount': 0
  })


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
        return <AccountDetails updateFormData={updateFormData} setIsValidForm={setIsValidForm}/>

      case 2:
        return <AmountDetails updateFormData={updateFormData} setIsValidForm={setIsValidForm}/>

      case 3:
        return <Confirmation data={formData}/>

      case 4:
        //TODO: Enviar los datos al back. Si la respuesta es correcta, renderizar <Success> si no, usar otra pantalla. 
        return <Success data={formData}/>

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