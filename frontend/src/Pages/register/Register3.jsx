import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

export default function Register3() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [passwordErrors, setPasswordErrors] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state || {};

    const validatePassword = (password) => {
        const errors = {};
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const noSpaces = !/\s/.test(password);
        const lengthValid = password.length >= 6 && password.length <= 20;

        if (!lengthValid) {
            errors.length = 'La contraseña debe tener entre 6 y 20 caracteres';
        }
        if (!hasUpperCase) {
            errors.uppercase = 'Debe contener al menos una letra mayúscula';
        }
        if (!hasLowerCase) {
            errors.lowercase = 'Debe contener al menos una letra minúscula';
        }
        if (!hasNumber) {
            errors.number = 'Debe contener al menos un número';
        }
        if (!hasSpecialChar) {
            errors.specialChar = 'Debe contener al menos un carácter especial';
        }
        if (!noSpaces) {
            errors.noSpaces = 'No se permiten espacios';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        
        console.log('estoy en handleSubmit');
        
        e.preventDefault();

        const errors = validatePassword(password);
        if (Object.keys(errors).length > 0) {
            setPasswordErrors(errors);
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden');
            return;
        }


        const API_URL_DESA = 'http://localhost:5000'    

        const data = {
            email: email,
            password: password
        }

        let URL_BASE = ''

        if (import.meta.env.MODE == 'development') {
            URL_BASE = 'http://localhost:5000'
          } else {
             URL_BASE = import.meta.env.VITE_API_URL_PROD
          }

          URL_BASE = import.meta.env.VITE_API_URL_PROD

        try {

  
              console.log('URL_BASE >>>>> ', URL_BASE);
            
            const response = await axios.post(`${URL_BASE}/users/set-password`, data)

            console.log('>> response ', response);
                
            
            if (response.status === 200) {
                navigate('/');
            } else {
                setMessage('Error al configurar la contraseña');
            }
        } catch (error) {
            setMessage('Error al configurar la contraseña');
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-white'>
            {/* Logo Essential Bank */}
            <div className='mb-8 text-center'>
                <h1 className='text-6xl font-bold text-blue-500'>Essential</h1>
                <h2 className='text-4xl font-bold text-blue-700'>Bank</h2>
            </div>

            {/* Bienvenido */}
            <div>
                <h2 className='text-4xl mb-8'> Crea tu clave </h2>
            </div>

            <div className='w-full max-w-xs'>
                <form onSubmit={handleSubmit}>
                    {/* Clave de ingreso */}
                    <label className='block mb-2 text-sm font-bold text-gray-700'>Clave de ingreso</label>
                    <div className='flex items-center mb-6 border rounded shadow bg-greyDesign'>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full p-2 leading-tight bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline'
                            placeholder=''
                        />
                    </div>
                    {passwordErrors.length && <p className='text-red-500 text-xs italic'>{passwordErrors.length}</p>}
                    {passwordErrors.uppercase && <p className='text-red-500 text-xs italic'>{passwordErrors.uppercase}</p>}
                    {passwordErrors.lowercase && <p className='text-red-500 text-xs italic'>{passwordErrors.lowercase}</p>}
                    {passwordErrors.number && <p className='text-red-500 text-xs italic'>{passwordErrors.number}</p>}
                    {passwordErrors.specialChar && <p className='text-red-500 text-xs italic'>{passwordErrors.specialChar}</p>}
                    {passwordErrors.noSpaces && <p className='text-red-500 text-xs italic'>{passwordErrors.noSpaces}</p>}

                    {/* Confirmar clave */}
                    <label className='block mb-2 text-sm font-bold text-gray-700'>Confirma tu clave de ingreso</label>
                    <div className='flex items-center mb-6 border rounded shadow bg-greyDesign'>
                        <input
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='w-full p-2 leading-tight bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline'
                            placeholder=''
                        />
                    </div>

                    <div className='flex justify-end text-center mt-4'>
                        <button className='mt-2 mr-2 px-4 py-2 text-black rounded transition-colors'>
                            <Link to="/RegisterPaso2">Atrás</Link>
                        </button>
                        <button type='submit' className='mt-2 px-4 py-2 bg-[#242054] text-white rounded transition-colors'>
                            Siguiente
                        </button>
                    </div>
                </form>
                {message && <p className='text-red-500 text-xs italic'>{message}</p>}
            </div>
        </div>
    );
}
