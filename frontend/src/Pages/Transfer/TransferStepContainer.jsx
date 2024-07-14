import React, { useState } from 'react'
import AccountDetails from '../Transfer/AccountDetails'
import AmountDetails from '../Transfer/AmountDetails'
import Confirmation from '../Transfer/Confirmation'
import Success from '../Transfer/Success'
import useTranfer from '../../Hooks/useTranfer';



const TransferStepContainer = () => {

    const [step, setStep] = useState(1)

    const nextStep = () => {
      setStep(step + 1)
    }

    const prevStep = () => {
      setStep(step - 1)
    }





    const renderStepComponent = () => {
         switch (step) {
    
            case 1:
            return <AccountDetails/>

            case 2: 
            return <AmountDetails/>

            case 3:
            return <Confirmation/>

            case 4:
            return <Success/>
    
            default:
                return <div>Step not found</div>;

        } 


    }



  return (
    <div>  
        
        {renderStepComponent()}

        <div className='w-full px-6 pb-4'>
        <div className='flex justify-end gap-3 items-center'>
          
          <button onClick={prevStep}> Atras </button>          
          <button className='bg-primary text-white  py-2 px-8 rounded-lg shadow' onClick={nextStep}> Siguiente </button>
          </div>
      </div>
        
        
    </div>
  )
}

export default TransferStepContainer