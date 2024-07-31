import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

export default function Register2() {
    const [codigo, setCodigo] = useState('');
    const [message, setMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state || {};

    const handleVerify = async (e) => {
        e.preventDefault();

        

        console.log('email: ', email);
        console.log('token: ', codigo);
        

        const data = {
            email: email,
            token: codigo
        }

            let URL_BASE = ''
        if (import.meta.env.MODE == 'development') {
            URL_BASE = 'http://localhost:5000'
          } else {
             URL_BASE = import.meta.env.VITE_API_URL_PROD
          }

          URL_BASE = import.meta.env.VITE_API_URL_PROD

          console.log('URL_BASE >> ', URL_BASE);


        try {



            const response = await axios.post(`${URL_BASE}/otp/checkToken`,  data) 
            
            if (response.status === 200) {
                navigate('/RegisterPaso3', { state: { email: email } });
            } else {
                setMessage('Codigo de verificación Invalido');
            }
        } catch (error) {
            setMessage('Codigo de verificación Erroneo');
        }
    };
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-white'>

            {/* Logo Essential Bank */}
            <div className='mb-8 text-center'>
                <h1 className='text-6xl font-bold text-blue-500'>Essential</h1>
                <h2 className='text-4xl font-bold text-blue-700'>Bank</h2>
            </div>

            {/* Bienvenida */}
            <div>
                <h2 className='text-4xl mb-8'>Verifica tu número telefónico</h2>
            </div>

            {/* Contenido de los inputs para el código SMS */}
            <div className='w-full max-w-xs'>

                <div className="flex flex-col items-center justify-center mb-14 md:text-center">
                    <p className="pb-2">
                        Te enviamos un código SMS al
                    </p>
                    <p className="text-3xl text-[#242054]">
                        {email}
                    </p>
                </div>

                <form onSubmit={handleVerify}>
                    <div className='flex justify-center mb-6'>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className='flex-shrink-0 w-12 h-12 mr-4 border rounded shadow bg-gray-200'>
                                <input
                                    type='text'
                                    maxLength="1"
                                    className='w-full h-full bg-transparent text-gray-700 border-none focus:outline-none text-center'
                                    value={codigo[i] || ''}
                                    onChange={(e) => {
                                        const newCodigo = codigo.split('');
                                        newCodigo[i] = e.target.value;
                                        setCodigo(newCodigo.join(''));
                                    }}
                                    placeholder=''
                                />
                            </div>
                        ))}
                    </div>

                    {/* Botones de Atras y Siguiente */}
                    <div className='flex justify-end text-center mt-16'>
                        <Link to="/Register">
                            <button className='mt-2 px-4 py-2 text-black rounded transition-colors'> Atras </button>
                        </Link>
                        <button type='submit' className='mt-2 px-4 py-2 bg-[#242054] text-white rounded transition-colors'> Siguiente</button>
                    </div>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}
