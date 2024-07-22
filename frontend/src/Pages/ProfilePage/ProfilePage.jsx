import React from 'react'
import profilePicture from '../../assets/Images/Photo.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../css/main.css'

const ProfilePage = () => {
  return (

    <> 



    <div className='main  flex flex-col items-center '>
        <Header/> 

        <div className='flex flex-col justify-start  w-full space-y-4'>
        
            <div className='flex flex-col items-center justify-center '>
                
                <div className='mb-6'>
                    <h1 className='text-center'> Perfil </h1>
                    <img src={profilePicture} className='h-[120px] w-[120px] mb-4' alt="" />
                    <p> Nombre y apellido </p>
                    <h3 className='text-primary text-xl text-center'> Marisol Domi </h3>
                </div>
            
                <div id='buttons' className='flex flex-col w-11/12 max-w-screen-lg mx-auto gap-4 '>
                    
                    <button className='text-primary text-center text-sm bg-lightGrey rounded-lg py-3 px-4 box-shadow-btn w-full' >
                        Cambiar nombre y apellido
                    </button>

                    <button className='text-primary text-center text-sm bg-lightGrey rounded-lg py-3 px-4 box-shadow-btn' >
                        Cambiar contraseña
                    </button>

                    <button className='text-primary text-center text-sm bg-lightGrey rounded-lg py-3 px-4 box-shadow-btn' >
                        Cambiar teléfono de confirmación
                    </button>

                    <button className='text-primary text-center text-sm bg-lightGrey rounded-lg py-3 px-4 box-shadow-btn' >
                        Cambiar mail de ingreso
                    </button>

                    <button className='text-white text-center text-sm bg-primary rounded-lg py-3 px-4 box-shadow-btn' >
                        Cerrar sesión
                    </button>


                </div>
            
            </div>
            
            
            

    
        </div>

    
    </div>
    
    <Footer/>
    
    </>
  )
}

export default ProfilePage