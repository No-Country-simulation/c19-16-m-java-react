
import { useState } from 'react';
import Header from '../../components/Header'
import { useAssistant } from '../../Providers/AssistantProvider';
import VirtualAssistantModal from '../../components/VirtualAssistantModal';
import ToolTip from '../../components/ToolTip';

const AmountDetailsPay = () => {

    const data = {
        balance: '5435,00'
    }


    const [assistantActive, setAssistantActive] = useAssistant();

    const [isVisible, setVisible] = useState(true)


    return (
        <>

            {assistantActive && <VirtualAssistantModal />}


            <div className='flex flex-col items-center justify-between min-h-screen'>



                <Header />

                <h2 className='text-center text-2xl font-medium mt-4'> Ingresa el monto a pagar </h2>

                <ToolTip id={"AmountOfPay"}>
                    <div className=' flex flex-col text-center spacey-y-6 flex-grow w-11/12 mt-20'>

                        <input
                            type="number"
                            className='text-5xl text-center '
                            placeholder="$54,00 usd"
                            min="0"
                        // step="0.01"
                        />

                        <p> Monto disponible ${data.balance} usd </p>

                    </div>
                </ToolTip>




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

export default AmountDetailsPay