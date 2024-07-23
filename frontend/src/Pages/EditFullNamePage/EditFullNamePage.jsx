
import Header from '../../components/Header'
import { useState } from 'react'

import { useUser } from '../../Providers/UserProvider'

const EditFullNamePage = () => {

  const [user, setUser] = useUser();


  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  
  const [nameError, setnameError] = useState('')
  const [surnameError, setSurnameError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit...');
    console.log(`Datos para Login name: ${name} y surname ${surname}`);
  }

  const handleName = (event) => {

    console.log(event.target.value);

    

    if (!event.target.value) {
      setnameError('Debe introducir un nombre')
      setName("")
      console.log('nombre no valido');
    } else {
      console.log('reseteo');
      setName(event.target.value)
      setnameError('')
    }
    
  }

  
  const handleSurname = (event) => {

    console.log('handleSurname > ');

    setSurname(event.target.value)

    if (!event.target.value) {
      console.log('error de apellido');
      setSurnameError('Debe introducir el apellido')
      setSurname("")
    } else {
      setSurnameError(null)
    }
    
  }


  
  return (
    <>

      <form 
        className='flex flex-col items-center justify-between min-h-screen '
        onSubmit={handleSubmit}
        >



        <Header />

        <div className='space-y-2'> 
            <h2 className='text-3xl text-center'> Cambiar nombre y apellido </h2>
            <h2 className='text-3xl text-center'> {user.name} {user.surname} </h2>
            <p className=''> A continuación puedes actualizar tu nombre y apellido. </p>
        </div>

        <div className='mx-auto w-11/12' >
          
          <label htmlFor="name" className='text-primary'> Nombre </label>
          <input
            type="text"
            placeholder='Ingresa el nombre del contacto'
            className='w-full p-4 leading-tight bg-white text-darkGrey border rounded-lg border-black focus:outline-none focus:shadow-outline mb-[16px]'
            onBlur={handleName}
          />
          {nameError && (
              <p className="text-sm text-red-600 mb-6" id="email-error">
                {nameError}
              </p>
            )}


          <label htmlFor="" className='text-primary'> Apellido </label>

          <input
            type="text"
            placeholder='Ingresa tu nuevo apellido'
            className='w-full p-4 leading-tight bg-white text-darkGrey border rounded-lg border-black focus:outline-none focus:shadow-outline'
            onBlur={handleSurname}
          />

          {surnameError && (
              <p className="text-sm text-red-600 mb-6" id="email-error">
                {surnameError}
              </p>
            )}

          

        </div>


     



        <div className='w-full px-6 pb-4'>
          <div className='flex justify-end gap-3 items-center'>
            <p> Atrás </p>
            <button 
              className='bg-darkGrey text-white  py-2 px-8 rounded-lg shadow' 
              type='submit'>
              Guardar 
              </button>
            </div>
        </div>

      </form>


    </>
  )
}

export default EditFullNamePage