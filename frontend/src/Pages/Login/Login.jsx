import { useState } from 'react';
import { BiUser, BiKey, BiShowAlt, BiHide, BiFingerprint } from 'react-icons/bi';
import { Link } from "react-router-dom"
import users from '../../data/data'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  console.log(users);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [emailError, setemailError] = useState('')
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  const handleEmailChange = (e) => {   


    if (!e.target.value) {
      setemailError('Debe introducir un correo electrónico')
    } else if (!emailRegex.test(e.target.value)) {
      setemailError('El correo electrónico introducido no es válido')   
    } else {
      setemailError('')
      setEmail(e.target.value)
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

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(email);

    setemailError('')


    if (!emailError && !passwordError) {
      // simular 
      let userIndex = users.findIndex(user => user.email === email)

      if (userIndex == -1) {
        setemailError('El correo introducido no existe')  
      } else if (users[userIndex].password === password) {        
          navigate("/Home")
        } else {
          setPasswordError('Contraseña no valida')
        }
      }

    } 

    

  


  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white'>

      {/* Logo Essential Bank */}
      <div className='mb-8 text-center'>
        <h1 className='text-6xl font-bold text-blue-500'>Essential</h1>
        <h2 className='text-4xl font-bold text-blue-700'>Bank</h2>
      </div>

      {/* Bievenido */}

      <div>
        <h2 className='text-4xl mb-8'> ¡Bienvenid@! </h2>
      </div>



      <div className='w-full max-w-xs '>


        <form action="" onSubmit={handleSubmit}> 

        {/* User input*/}
        <label className='block mb-2 text-sm font-bold text-gray-700'>Usuario</label>
        <div className='flex items-center mb-1 border rounded shadow relative bg-lightGrey'>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiUser className='m-2' />
          </div>
          
          
          <input 
            type='text' 
            className={` ${emailError ? 'border-red-300' : 'border-none'}  pl-10 block border w-full p-2 leading-tight  bg-lightGrey text-gray-700  focus:outline-none focus:shadow-outline` } 
            placeholder=''             
            onBlur={handleEmailChange}
            />         
      

        </div>
        {emailError && (
              <p className="text-sm text-red-600 mb-6" id="email-error">
                {emailError}
              </p>
            )}

        {/* Clave input*/}
        <label className='block mb-2 mt-4 text-sm font-bold text-gray-700'>Clave</label>
        <div className={` flex items-center ${passwordError ? 'mb-1 border-red-300': 'mb-6 border-none'} relative bg-lightGrey border rounded shadow`}>
          
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiKey className='m-2 text-gray-700' />
        </div>
          
          <input 
          type={showPassword ? 'text' : 'password'} 
          className= {`  pl-10 border w-full p-2 leading-tight bg-lightGrey text-gray-700 focus:outline-none focus:shadow-outline`} 
          onBlur={handlePasswordChange}
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



        <Link to="/Home" ><button className='w-full px-4 py-2 mb-4 text-black bg-greyDesign rounded  focus:outline-none'>Ingresar</button></Link>

        <div className='text-center mb-4'>
          <a href='#' className='text-sm text-black hover:underline'>¿Olvidaste la clave?</a>
        </div>

        <div className='flex items-center justify-between text-center mt-4'>
          <p className='text-gray-700'>¿Aún no tienes cuenta?</p>
          <button className='mt-2 px-4 py-2 bg-lightGrey text-black rounded  transition-colors'>  <Link to={'/Register'}> Registrarse</Link>  </button>
        </div>
        </form>
      </div>
    </div>
  );
}