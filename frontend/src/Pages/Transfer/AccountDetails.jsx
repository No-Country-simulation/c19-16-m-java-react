
import Header from '../../components/Header'
import { useState, useEffect } from 'react'

const AccountDails = ({updateFormData, setIsValidForm}) => {


  const [iban, setIban] = useState()
  const [ibanerror, setIbanError] = useState('')
  const [contactNameError, setContactNameError] = useState('')
  const [bankNameError, setBankError] = useState('')
  
  const [validForm, setValidForm] = useState(false)


  useEffect(() => {
  
    console.log('Me ejecuto');
  
  
  }, [iban])
  


  const checkIsValidForm = () => {
    
    if (!ibanerror && !contactNameError && !bankNameError) {      
      setIsValidForm(true)      
    } else {
      setIsValidForm(false)      
    }
  }

  // Validaciones IBAN
  const handleIBAN = (event) => {
    
    if (!event.target.value) {
        setIbanError('Debe indicar un numero de cuenta valido')
    } else {
      setIbanError('')      
      setIban(event.target.value)
    }
  }

  // Validaciones nombre de contacto
  const handleContactName = (event) => {    
    
    let nombreContact = event.target.value    
    const regex = /^[A-Z][a-zA-Z-' ]*$/;
    if (nombreContact) {      
      if (nombreContact.length < 3 || nombreContact.length > 20) {        
        setContactNameError('El nombre del contacto debe de tener entre 3 y 20 caracteres')
      } else if (!regex.test(nombreContact)){
        setContactNameError('El nombre del contacto solo puede contener letras')
      } else {
        setContactNameError('')
      }
    } else {
      setContactNameError('')
    }
  }

  // Validaciones nombre de banco
  const handleBanKName = (event) => {
    
    let bankName = event.target.value
    const regex = /^[A-Z][a-zA-Z-' ]*$/;

    if (bankName) {
      if (bankName.length < 3 || bankName.length > 10) {
        setBankError('El nombre del banco debe de tener entre 3 y 10 caracteres')
      } else if (!regex.test(bankName)) {
        setBankError('El nombre del banco solo puede tener letras')
      } else {
        setBankError('')
      }
    } else {
      setBankError('')
    }

  }
  
  
  return (
    <>

      <div className='flex flex-col items-center justify-between min-h-screen '>



        <Header />

        <h2 className='text-3xl'> Agrega un numero de cuenta </h2>

        <div className='mx-auto w-11/12 flex flex-col'>
            
                <label className='block mb-2 text-sm font-bold text-gray-700'> Numero de IBAN </label>
            
                <div className='flexf items-center mb-1 border rounded shadow  bg-greyDesign'>
{/*IBAN */}
                <input type='text' 
                  name="IBAN"
                  className='w-full p-4 leading-tight bg-lightGrey text-gray-700 border-none focus:outline-none focus:shadow-outline'
                  placeholder='Ingresa numero de IBAN' 
                  onBlur={handleIBAN}/>
                
                </div>
                {ibanerror && <div> <p className='text-sm text-red-600'>  {ibanerror} </p> </div>}
        </div>

{/* Nombre de contacto */}          
        <div className='mx-auto w-11/12'>
          <p>  ¿Deseas guardar este contacto como transferencia frecuente? </p>

          <label htmlFor="" className='text-primary'> Nombre de contacto </label>
          <input
            name='contactName'
            type="text"
            placeholder='Ingresa el nombre del contacto'
            className='w-full p-4 leading-tight bg-lightGrey text-gray-700 border-none focus:outline-none focus:shadow-outline mb-[16px]'
            onBlur={handleContactName}
          />
          {contactNameError && <div> <p className='text-sm text-red-600'>  {contactNameError} </p> </div>}

{/* Nombre de Banco */}          
          <label htmlFor="" className='text-primary'> Nombre de banco destino </label>

          <input
            name='destinationBank'
            type="text"
            placeholder='Ingresa el nombre del banco destino'
            className='w-full p-4 leading-tight bg-lightGrey text-gray-700 border-none focus:outline-none focus:shadow-outline'
            onChange={handleBanKName}
          />
          {bankNameError && <div> <p className='text-sm text-red-600'>  {bankNameError} </p> </div>}

        </div>


        <div className='mx-auto w-11/12'>

        </div>




      </div>


    </>
  )
}

export default AccountDails