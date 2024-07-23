
import Header from '../../components/Header'


const EditPassword = () => {
  return (
    <>

      <div className='flex flex-col items-center justify-between min-h-screen '>



        <Header />

       

        <div className='mx-auto w-11/12 grow'>

        <div className='space-y-2 mb-6 text-center'> 
            <h2 className='text-3xl text-center'> Cambiar contraseña </h2>            
            <p className=''> A continuación puedes actualizar tu contraseña.</p>
        </div>

        <div className='mx-auto w-11/12 space-y-6'>          

          <div> 
            <label htmlFor="currentPassword" className='text-primary'> Ingresa tu clave de acceso actual </label>
            <input
              type="text"
              placeholder='Ingresa tu clave actual'
              className='w-full p-4 leading-tight bg-white text-darkGrey border rounded-lg border-black focus:outline-none focus:shadow-outline mb-[16px]'
            />
          </div>

          {/* Nueva Password*/}
          <div> 
            <label htmlFor="nerPasswor" className='text-primary'> Ingresa tu nueva clave de acceso </label>
            <input
              type="password"
              placeholder='Ingresa tu nueva clave de acceso'
              className='w-full p-4 leading-tight bg-white text-darkGrey border rounded-lg border-black focus:outline-none focus:shadow-outline mb-[16px]'
            />
          </div>

          {/* Confirmar nueva password*/}
          <div> 
            <label htmlFor="confirmPassword" className='text-primary'> Confirma tu nueva clave de acceso </label>
            <input
              type="password"
              placeholder='Vuelve a ingresar la nueva clave de acceso'
              className='w-full p-4 leading-tight bg-white text-darkGrey border rounded-lg border-black focus:outline-none focus:shadow-outline mb-[16px]'
            />
          </div>




        </div>


        </div>



        <div className='w-full px-6 pb-4'>
        <div className='flex justify-end gap-3 items-center'>
          <p> Atrás </p>
          <button className='bg-darkGrey text-white  py-2 px-8 rounded-lg shadow' > Guardar </button>
          </div>
      </div>

      </div>


    </>
  )
}

export default EditPassword