import { useState, useRef, useEffect } from 'react';
import { BiUser, BiKey, BiShowAlt, BiHide, BiFingerprint } from 'react-icons/bi';
import { Link } from "react-router-dom"
import users from '../../data/data'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Providers/UserProvider';
import axios from 'axios';


export default function LoginPage() {
  
  const [showPassword, setShowPassword] = useState(false);    
  const [isDisabled, setisDisabled] = useState(true)
  const [emailError, setemailError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate();

  const version = 1. 

  useEffect(() => {   
    
    if (email > '' && password > '' && emailError == '' && passwordError == '') {
      setisDisabled(false)
    } else {
      setisDisabled(true)
    }  
  }, [email,password])


  useEffect(() => {   
    
    console.log(typeof process.env.NODE_ENV);

    document.title = `Essential Bank | ${process.env.NODE_ENV.substring(0, 3)} | ${version} `

  }, [])
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const IngresarBtn = useRef(null)

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  const handleEmailChange = (e) => {   

    setEmail('')

    if (!e.target.value) {
      setemailError('Debe introducir un correo electrónico')
      
    } else if (!emailRegex.test(e.target.value)) {
      setemailError('El correo electrónico introducido no es válido')   
      
    } else {

      setemailError('')
      console.log('e.target.value ', e.target.value);
      setEmail(e.target.value)
      
    }  


      
  }

  const handlePasswordChange = (e) => {   

    setPassword('')
    
    

    if (!e.target.value) {
      setPasswordError('Debe introducir la contraseña')
      
    } else if (!passwordRegex.test(e.target.value)) {
      setPasswordError('La contraseña introducida no es valida')
      
    } else {
      setPasswordError('')
      console.log('informo passord ', e.target.value);
      setPassword(e.target.value)
      
    }  


      
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Email Error:", emailError);
    console.log("Password Error:", passwordError);

    if (!emailError && !passwordError) {
        try {
            console.log("Enviando solicitud a la API...");

            console.log('email: ', email);
            console.log('password: ', password);

            const response = await axios.post('https://plataforma-i.onrender.com/users/login', {
                email: email,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log("Respuesta de la API:", response);

            if (response.status === 200) {
                navigate("/Home");
                localStorage.setItem('token', response.data.token);
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
    <div className='flex flex-col items-center justify-evenly min-h-screen bg-white space-y-4'>

      <header>
      <img src="/Logo.png" className='h-[57px]' alt="" />    
      <h2 className='text-4xl mb-8'> ¡Bienvenid@! </h2>
      </header>



      <div className='w-full max-w-xs '>


        <form onSubmit={handleSubmit}> 

        {/* User input*/}
        <label className='block mb-2 text-sm font-bold text-gray-700'>Correo electrónico</label>
        
        <div className='flex items-center mb-1 relative  '>
        
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiUser className='m-2' />
          </div>
          
          
          <input 
            name='email'
            type='text' 
            className={` ${emailError ? 'border-red-300' : ''} pl-10 block w-full input-field p-2 leading-tight  text-gray-700  ` } 
            placeholder='Ingresa tu correo electronico'             
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
        <label className='block mb-2 mt-4 text-sm font-bold text-gray-700'>Clave de ingreso </label>
        
        <div className='flex items-center mb-1 relative  '>
        
          
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiKey className='m-2 text-gray-700' />
        </div>
          
          <input 
          name='password'
          type={showPassword ? 'text' : 'password'} 
          // className= {`  pl-10  w-full p-2 leading-tight input-field text-gray-700 w-full `} 
          className={` ${emailError ? 'border-red-300' : ''} pl-10 block w-full input-field p-2 leading-tight  text-gray-700  ` } 
          placeholder='Ingresa tu clave de acceso' 

          onBlur={handlePasswordChange}
          onChange={(e) => {handlePasswordChange(e);
            setPassword(e.target.value);}
          }
          
          id='claveInput' />

            <button 
              className="absolute inset-y-0 right-0 pr-1 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ?  <BiHide className='h-3'/> : <BiShowAlt />}
                            
            </button>

          
          {/* <button onClick={togglePasswordVisibility} className='p-2 text-gray-700 bg-red-300'>
            {showPassword ? 
            
            <div className="absolute inset-y-0 right-0 pr-1 flex items-center pointer-events-none">
              <BiHide className='h-3'/>              
            </div>
            :
            <div className="absolute inset-y-0 right-0 pr-1 flex items-center pointer-events-none">
              <BiShowAlt />
            </div>
          }
          </button> */}
        </div>
        {passwordError && (
              <p className="text-sm text-red-600 mb-6" id="email-error">
                {passwordError}
              </p>
            )}




          <div className='flex justify-center'> 
          <button type='submit' 
          disabled={isDisabled}
          // className={`w-full px-4 py-2 mb-4 text-black ${!emailError && !passwordError ?  'bg-green-600' :  'bg-lightGrey cursor-not-allowed' }  rounded  focus:outline-none`}  
          className={`w-full px-4 py-2 mb-4 text-black secondary-button  rounded  `}  
          ref={IngresarBtn} >
            Ingresar
          </button>
          </div>
        



        <div className='text-center'>
          <p href='#' className='text-sm text-black hover:underline'>¿Olvidaste tu clave de ingreso?</p>
          <a href="" className='underline'> Recupera clave de ingreso </a>
          
        </div>


      
        </form>
      </div>
      <div className='flex items-center justity-center gap-2'>
          <p className='text-gray-700'>¿Aún no tienes cuenta?</p>
          <button 
            
            // className='mt-2 px-4 py-2 bg-lightGrey text-black rounded  transition-colors'>  
             className='w-full px-4 py-2 mb-4 text-black secondary-button  rounded  '>  
            <Link to={'/Register'}> Registrarse</Link>  
          </button>
        </div>


    </div>
  );
}