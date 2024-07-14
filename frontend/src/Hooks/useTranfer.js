import { useState } from 'react';

import AccountDetails from '../Pages/Transfer/AccountDetails'
import AmountDetails from '../Pages/Transfer/AmountDetails'
import Confirmation from '../Pages/Transfer/Confirmation'

function useTranfer() {  

   const [step, setStep ] = useState(1)


  const state = {
  
    accountNumber: '',
    contactName: '',
    destinationBankName: '',
    amount: 0,      
  
  }

  const nextStep = () => {
    setStep(step + 1)

//  switch (step) {
    
//     case 1:
//       return <AccountDetails/>

//     case 2: 
//       return <AmountDetails/>

//     case 3:
//       return <Confirmation/>

//     case 4:
//       return <Success/>
    
//     default:

//   } 


  }

 

return { step, nextStep };
  
  
}

export default useTranfer;


