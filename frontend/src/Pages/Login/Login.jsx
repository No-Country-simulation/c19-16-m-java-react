import { useState, useRef, useEffect } from 'react';
import { BiUser, BiKey, BiShowAlt, BiHide } from 'react-icons/bi';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setisDisabled] = useState(true);
  const [emailError, setemailError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const version = 2;

  useEffect(() => {
    if (email && password && !emailError && !passwordError) {
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  }, [email, password, emailError, passwordError]);

  useEffect(() => {
    document.title = `Essential Bank | ${process.env.NODE_ENV?.substring(0, 3)} | ${version}`;
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const IngresarBtn = useRef(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleEmailChange = (e) => {
    setEmail('');
    if (!e.target.value) {
      setemailError('Debe introducir un correo electrónico');
    } else if (!emailRegex.test(e.target.value)) {
      setemailError('El correo electrónico introducido no es válido');
    } else {
      setemailError('');
      setEmail(e.target.value);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword('');
    if (!e.target.value) {
      setPasswordError('Debe introducir la contraseña');
    } else if (!passwordRegex.test(e.target.value)) {
      setPasswordError('La contraseña introducida no es valida');
    } else {
      setPasswordError('');
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      try {
        const response = await axios.post('https://plataforma-i.onrender.com/users/login', {
          email,
          password,
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 200) {
          navigate("/Home");
          localStorage.setItem('token', response.data.token);
        } else {
          setPasswordError('Correo electrónico o contraseña incorrectos');
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setPasswordError('Correo electrónico o contraseña incorrectos');
        } else {
          setPasswordError('Ocurrió un error, por favor intenta nuevamente');
        }
      }
    }
  };

  return (
    <div className='flex flex-col items-center min-h-screen space-y-4 bg-white justify-evenly'>
      <header>
        <img src="/Logo.png" className='h-[57px]' alt="" />
        <h2 className='mb-8 text-4xl'> ¡Bienvenid@! </h2>
      </header>
      <div className='w-full max-w-xs'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className='block mb-2 text-sm font-bold text-gray-700'>Correo electrónico</label>
          <div className='relative flex items-center mb-1'>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiUser className='m-2' />
            </div>
            <input 
              id="email"
              name='email'
              type='text'
              className={` ${emailError ? 'border-red-300' : ''} pl-10 block w-full input-field p-2 leading-tight  text-gray-700  ` }
              placeholder='Ingresa tu correo electronico'
              onBlur={handleEmailChange}
              onChange={handleEmailChange}
            />
          </div>
          {emailError && (
            <p className="mb-6 text-sm text-red-600" id="email-error">
              {emailError}
            </p>
          )}
          <label htmlFor="password" className='block mt-4 mb-2 text-sm font-bold text-gray-700'>Clave de ingreso</label>
          <div className='relative flex items-center mb-1'>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiKey className='m-2 text-gray-700' />
            </div>
            <input
              id="password"
              name='password'
              type={showPassword ? 'text' : 'password'}
              className={` ${passwordError ? 'border-red-300' : ''} pl-10 block w-full input-field p-2 leading-tight  text-gray-700  `}
              placeholder='Ingresa tu clave de acceso'
              onBlur={handlePasswordChange}
              onChange={(e) => { handlePasswordChange(e); setPassword(e.target.value); }}
            />
            <button 
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-1"
              onClick={togglePasswordVisibility}
            >
              {showPassword ?  <BiHide className='h-3'/> : <BiShowAlt />}
            </button>
          </div>
          {passwordError && (
            <p className="mb-6 text-sm text-red-600" id="password-error">
              {passwordError}
            </p>
          )}
          <div className='flex justify-center'>
            <button type='submit' 
              disabled={isDisabled}
              className={`w-full px-4 py-2 mb-4 text-black  secondary-button  rounded  `}
              ref={IngresarBtn}
            >
              Ingresar
            </button>
          </div>
          <div className='text-center'>
            <p className='text-sm text-black hover:underline'>¿Olvidaste tu clave de ingreso?</p>
            <a href="" className='underline'> Recupera clave de ingreso </a>
          </div>
        </form>
      </div>
      <div className='flex items-center gap-2 justity-center'>
        <p className='text-gray-700'>¿Aún no tienes cuenta?</p>
        <button className='w-full px-4 py-2 mb-4 text-black rounded secondary-button '>
          <Link to={'/Register'}> Registrarse</Link>
        </button>
      </div>
    </div>
  );
}
