
import Header from '../../components/Header'


const EditFullNamePage = () => {
  return (
    <>

      <div className='flex flex-col items-center justify-between min-h-screen '>



        <Header />

        <div className='space-y-2'> 
            <h2 className='text-3xl text-center'> Cambiar nombre y apellido </h2>
            <h2 className='text-3xl text-center'> Marisol Domi </h2>
            <p className=''> A continuación puedes actualizar tu nombre y apellido. </p>
        </div>

        <div className='mx-auto w-11/12'>
          
          <label htmlFor="name" className='text-primary'> Nombre </label>
          <input
            type="text"
            placeholder='Ingresa el nombre del contacto'
            className='w-full p-4 leading-tight bg-white text-darkGrey border rounded-lg border-black focus:outline-none focus:shadow-outline mb-[16px]'
          />

          <label htmlFor="" className='text-primary'> Apellido </label>

          <input
            type="text"
            placeholder='Ingresa el nombre del banco destino'
            className='w-full p-4 leading-tight bg-white text-darkGrey border rounded-lg border-black focus:outline-none focus:shadow-outline'
          />

        </div>


        <div className='mx-auto w-11/12'>

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

export default EditFullNamePage