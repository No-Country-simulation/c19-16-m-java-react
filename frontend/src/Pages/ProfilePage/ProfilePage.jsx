import React from 'react'
import profilePicture from '../../assets/Images/Photo.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../css/main.css'
import { Link, useNavigate} from 'react-router-dom'

const ProfilePage = () => {

    const navigate = useNavigate();
  
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')    
    }
  
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
                    
                    <Link to='/editName' >                    
                    <button className='text-primary text-center text-sm bg-lightGrey rounded-lg py-3 px-4 box-shadow-btn w-full' >
                        Cambiar nombre y apellido
                    </button>
                    </Link>


                    <Link to='/editPassword' > 
                    <button className='text-primary text-center text-sm bg-lightGrey rounded-lg py-3 px-4 box-shadow-btn w-full' >
                        Cambiar contraseña
                    </button>
                    </Link>
                    

                    <button className='text-primary text-center text-sm bg-lightGrey rounded-lg py-3 px-4 box-shadow-btn w-full' >
                        Cambiar teléfono de confirmación
                    </button>

                    <button className='text-primary text-center text-sm bg-lightGrey rounded-lg py-3 px-4 box-shadow-btn w-full' >
                        Cambiar mail de ingreso
                    </button>

                    <button className='text-white text-center text-sm bg-primary rounded-lg py-3 px-4 box-shadow-btn w-full' onClick={logout}>
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