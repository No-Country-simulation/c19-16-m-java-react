import React, { useState } from 'react';
import { BiUser, BiKey, BiShowAlt, BiHide, BiFingerprint } from 'react-icons/bi';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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


      
      <div className='w-full max-w-xs'>
        
        {/* User input*/}
        <label className='block mb-2 text-sm font-bold text-gray-700'>Usuario</label>
        <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>
          <BiUser className='m-2' />
          <input type='text' className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
        </div>

        {/* Clave input*/}
        <label className='block mb-2 text-sm font-bold text-gray-700'>Clave</label>
        <div className='flex items-center mb-4 bg-greyDesign border rounded shadow'>
          <BiKey className='m-2 text-gray-700' />
          <input type={showPassword ? 'text' : 'password'} className='w-full p-2 leading-tight bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
          <button onClick={togglePasswordVisibility} className='p-2 text-gray-700 focus:outline-none'>
            {showPassword ? <BiHide /> : <BiShowAlt />}
          </button>
        </div>


        <button className='w-full px-4 py-2 mb-4 text-black bg-greyDesign rounded  focus:outline-none'>Ingresar</button>
        <div className='text-center mb-4'>
          <a href='#' className='text-sm text-black hover:underline'>¿Olvidaste la clave?</a>
        </div>
       
        <div className='flex items-center justify-center gap-4'>
          <button className='flex justify-center items-center px-2 py-2 text-black bg-greyDesign focus:outline-none'>
            <BiFingerprint className='' />          
          </button>
          <p> Ingresar con biometría </p> 
        </div>

        <div className='flex items-center justify-between text-center mt-4'>
          <p className='text-gray-700'>¿Aún no tienes cuenta?</p>
          <button className='mt-2 px-4 py-2 bg-greyDesign text-black rounded  transition-colors'>Registrarse</button>
        </div>
      </div>
    </div>
  );
}