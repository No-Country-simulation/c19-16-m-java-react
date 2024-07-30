
import Header from '../../components/Header'
import ServicioFoto from '../../assets/Images/servicio.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAssistant } from '../../Providers/AssistantProvider'
import VirtualAssistantModal from '../../components/VirtualAssistantModal'
import ToolTip from '../../components/ToolTip'




const ConfirmationPay = () => {

    const successData = {
        image: '',
        amount: '$54,00 usd',
        ServiceName: 'Compañia de Luz',
        description: 'Departamento de los sauces'
    }
    const [assistantActive, setAssistantActive] = useAssistant();

    const [isVisible, setVisible] = useState(true)

    return (
        <>
            {assistantActive && <VirtualAssistantModal />}



            <div className='flex flex-col items-center justify-between min-h-screen'>

                <Header />

                <h2 className='text-center text-2xl font-medium mt-4'> Confirmar transferencia </h2>

                <div className='text-center spacey-y-6 flex-grow mt-7 w-11/12 '>

                    <ToolTip id={"ConfirmData"}>
                        <div className='flex items-center mt-14 gap-4 '>
                            <div className='mt-6 flex justify-center mb-6'>
                                <img src={ServicioFoto} alt="" />
                            </div>

                            <div className='text-left'>
                                <span id='amount' className='text-2xl font-medium text-primary'> {successData.amount} </span>
                                <p id='beneficiary'> {successData.ServiceName} </p>
                                <p className='text-sm' id='bank'> {successData.description} </p>

                            </div>

                        </div>
                    </ToolTip>
                </div>


                <div className='w-full px-6 pb-4'>
                    <div className='flex justify-end gap-3 items-center'>
                        <p> Atras </p>
                        <Link to=""> <button className='bg-primary text-white  py-2 px-8 rounded-lg shadow' > Confirmar </button> </Link>
                    </div>
                </div>



            </div>



        </>
    )
}

export default ConfirmationPay