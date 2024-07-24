
import Header from '../../components/Header'
import { useState, useEffect, useRef } from 'react'

const AccountDails = ({updateFormData, setIsValidForm}) => {


  const [iban, setIban] = useState()
  const [contactName, setContactName] = useState()
  const [bankName, setBankName] = useState();

  const [ibanerror, setIbanError] = useState(null)
  const [contactNameError, setContactNameError] = useState(null)
  const [bankNameError, setBankError] = useState(null)
  
  const esPrimeraVez =  useRef(true)


  useEffect(() => {   

      // Si no hay error en los campos y se ha informado el iban deja continuar. 

      if (!ibanerror && !contactNameError && !bankNameError && iban) {      
        console.log('Formulario correcto');
        updateFormData({'Iban': iban, 'contactName': contactName, 'bankName': bankName })
        setIsValidForm(true)      
      } else {
        setIsValidForm(false)          
      }  
    
  }, [iban, contactName, bankName])
  
  
  
  

  // Cada vez que cambia alguno de los campos, comprueba que todos esten correctos
  // y da por correcto el formulario. 


  // Validaciones IBAN
  const handleIBAN = (event) => {   
    
    setIban(event.target.value)

    if (!event.target.value) {
        setIbanError('Debe indicar un numero de cuenta valido')
    } else {
      setIbanError('')      
      
    }
  }

  // Validaciones nombre de contacto
  const handleContactName = (event) => {    
    
    let nombreContact = event.target.value  
    setContactName(nombreContact)
    
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
    setBankName(event.target.value)
    
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