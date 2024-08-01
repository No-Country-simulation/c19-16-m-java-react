import { useState, useRef,useEffect } from 'react';
import { BiUser, BiKey, BiShowAlt, BiHide, BiFingerprint } from 'react-icons/bi';
import { Link } from "react-router-dom"
import users from '../../data/data'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Providers/UserProvider';
import axios from 'axios';
import axiosInstance from '../../../src/axiosConfig'

export default function LoginPage() {

  
  
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useUser()

  const [isDisabled, setisDisabled] = useState(true)
  
  
  const API_URL_PROD = import.meta.env.VITE_API_URL_PROD
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const IngresarBtn = useRef(null)

  const [emailError, setemailError] = useState('')
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    
    


    if (email > '' && password > '' && emailError == '' && passwordError == '') {
      setisDisabled(false)
    } else {
      setisDisabled(true)
    }  


  }, [email,password])


  const handleEmailChange = (e) => {   


    if (!e.target.value) {
      setemailError('Debe introducir un correo electrónico')
    } else if (!emailRegex.test(e.target.value)) {
      setemailError('El correo electrónico introducido no es válido')   
    } else {
      setemailError('')
      setEmail(e.target.value)
    }  

    if (!emailError && !passwordError) {
      IngresarBtn.current.style.backgroundcolor = "yellow"
    }
      
  }

  const handlePasswordChange = (e) => {   

    if (!e.target.value) {
      setPasswordError('Debe introducir la contraseña')
    } else if (!passwordRegex.test(e.target.value)) {
      setPasswordError('La contraseña introducida no es valida')
    } else {
      setPasswordError('')
      setPassword(e.target.value)
    }  
    

      
  }


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!emailError && !passwordError) {
        try {
            

            
            


            
            const data = {
              email: email,
              password: password,
            }           
            

            // const response = await axios.post(`https://essential-bank-back.vercel.app/users/login`, {
              const response = await axiosInstance.post('/users/login', data)
            


            console.log("Respuesta de la API:", response);
            console.log('response.status ', response.status);
            console.log('response.data.token ', response.data.token);
            console.log('response.data.user.id ', response.data.user._id);

            if (response.status == 200) {

              

              setUser(response.data.user)  
              navigate("/Home");
              localStorage.setItem('token', response.data.token)
              localStorage.setItem('id', response.data.user._id)


            } else {
                setPasswordError('Correo electrónico o contraseña incorrectos');
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            if (error.response) {
                console.error("Detalles del error:", error.response.data);
                if (error.response.status === 401) {
                    setPasswordError('Correo electrónico o contraseña incorrectos');
                } else {
                    setPasswordError('Ocurrió un error, por favor intenta nuevamente');
                }
            } else {
                setPasswordError('Ocurrió un error, por favor intenta nuevamente');
            }
        }
    } else {
        console.log("Errores en la validación, no se enviará la solicitud.");
    }
};


    


  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white'>

      {/* Logo Essential Bank */}
      <img src="/Logo.png" className='h-[57px]' alt="" />
      {/* Bievenido */}

      <div>
      <h2 className='text-4xl mb-8'> ¡Bienvenid@! </h2>
      </div>



      <div className='w-full max-w-xs '>


        <form onSubmit={handleSubmit}> 

        {/* User input*/}
        <label className='block mb-2 text-sm font-bold text-gray-700'>Correo electrónico</label>
        <div className='flex items-center mb-1 border rounded shadow relative bg-lightGrey'>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiUser className='m-2' />
          </div>
          
          
          <input 
            type='text' 
            className={` ${emailError ? 'border-red-300' : 'border-none'}  pl-10 block border w-full p-2 leading-tight  bg-lightGrey text-gray-700  focus:outline-none focus:shadow-outline` } 
            placeholder=''             
            onBlur={handleEmailChange}
            onChange={handleEmailChange}
            />         
      

        </div>
        {emailError && (
              <p className="text-sm text-red-600 mb-6" id="email-error">
                {emailError}
              </p>
            )}

        {/* Clave input*/}
        <label className='block mb-2 mt-4 text-sm font-bold text-gray-700'>Clave de ingreso</label>
        <div className={` flex items-center ${passwordError ? 'mb-1 border-red-300': 'mb-6 border-none'} relative bg-lightGrey border rounded shadow`}>
          
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiKey className='m-2 text-gray-700' />
        </div>
          
          <input 
          type={showPassword ? 'text' : 'password'} 
          className= {`  pl-10 border w-full p-2 leading-tight bg-lightGrey text-gray-700 focus:outline-none focus:shadow-outline`} 
          onBlur={handlePasswordChange}
          onChange={(e) => {handlePasswordChange(e);
            setPassword(e.target.value);}
          }
          placeholder='' 
          id='claveInput' />

          
          <button onClick={togglePasswordVisibility} className='p-2 text-gray-700 focus:outline-none'>
            {showPassword ? 
            
            <div className="absolute inset-y-0 right-0 pr-1 flex items-center pointer-events-none">
              <BiHide className='h-3'/>              
            </div>
            :
            <div className="absolute inset-y-0 right-0 pr-1 flex items-center pointer-events-none">
              <BiShowAlt />
            </div>
          }
          </button>
        </div>
        {passwordError && (
              <p className="text-sm text-red-600 mb-6" id="email-error">
                {passwordError}
              </p>
            )}




        
          {/* <button type='submit' className={`w-full px-4 py-2 mb-4 text-black ${!emailError && !passwordError ?  'bg-green-600' :  'bg-lightGrey cursor-not-allowed' }  rounded  focus:outline-none`}  ref={IngresarBtn} >
            Ingresar
          </button> */}

          <div className='flex justify-center'> 
            <button type='submit' 
            disabled={isDisabled}            
            className={`w-full px-4 py-2 mb-4 text-black secondary-button  rounded  focus:outline-none`}  
            ref={IngresarBtn} >
            Ingresar
          </button>
          </div>
        



        <div className='text-center mb-4'>
          <a href='#' className='text-sm text-black hover:underline'>¿Olvidaste la clave?</a>
        </div>


        <div className='flex items-center justify-between text-center mt-4'>
          <p className='text-gray-700'>¿Aún no tienes cuenta?</p>
          <button 
            
            className='mt-2 px-4 py-2 bg-lightGrey text-black rounded  transition-colors'>  
            <Link to={'/Register'}> Registrarse</Link>  
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}