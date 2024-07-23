import React from 'react'
import Header from '../../components/Header'
import { useUser  } from '../../Providers/UserProvider'
import { Link } from 'react-router-dom'

const EditEmail = () => {
  const [user, setUser] = useUser();

  return (
    <>
    <form className='flex flex-col items-center justify-between min-h-screen '>
    
    <Header/>

    <div className='mx-auto w-11/12 grow space-y-6'>
      <h1 className='text-center text-[22px] '> Cambiar mail de ingreso </h1>
      <p className='text-center text-[24px]'> {user.email}  </p>
      <p className='text-[14px] text-center'> A continuación puedes actualizar tu mail de ingreso. </p>       

      <div> 
            <label htmlFor="phoneNumber" 
            className='text-primary'> 
            Ingresar nuevo mail de ingreso
            </label>
            <input
              name="main"
              type="main"
              placeholder='Ingresa tu nuevo mail de ingreso'
              className='w-full p-4 leading-tight bg-white text-darkGrey border rounded-lg border-black focus:outline-none focus:shadow-outline mb-[16px]'
            />
      </div>

      <p className='text-center text-[14px] '> Te enviaremos un SMS a tu numero telefónico de verificación para confirmar tu identidad. </p>


    </div>

    <div className='w-full px-6 pb-4'>
        <div className='flex justify-end gap-3 items-center'>
          <button onClick={()=> navigate(-1)}>  </button>
          <Link to='/profile'> Atrás </Link>
          <button className='bg-darkGrey text-white  py-2 px-8 rounded-lg shadow' > Guardar </button>
          </div>
      </div>

    
    

    </form>

    </>
    

  )
}

export default EditEmail