//import { useState } from 'react';
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'

export default function Register3() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state || {};

    const handleSubmit = async (e) => {
        
        console.log('estoy en handleSubmit');
        
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden');
            return;
        }

        const API_URL_DESA = 'http://localhost:5000'    

        const data = {
            email: email,
            password: password
        }

        try {
            
            const response = await axios.post(`${API_URL_DESA}/users/set-password`, data)

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

    // Uso state para setear el paso en el que el usuario se encuentra en la barra del milestone   const [step, setStep] = useState(1);


    return (




        <div className='flex flex-col items-center justify-center min-h-screen bg-white'>

            {/* Logo Essential Bank */}
            <div className='mb-8 text-center'>
                <h1 className='text-6xl font-bold text-blue-500'>Essential</h1>
                <h2 className='text-4xl font-bold text-blue-700'>Bank</h2>
            </div>

            {/* Bievenido */}

            <div>
                <h2 className='text-4xl mb-8'> Crea tu usuario y clave </h2>
            </div>



            <div className='w-full max-w-xs'>

            <form onSubmit={handleSubmit}>
                {/* clave de ingreso*/}
                <label className='block mb-2 text-sm font-bold text-gray-700'>Clave de ingreso</label>
                <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>

                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}  className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
                </div>

                {/* conforma tu clave de ingreso*/}
                <label className='block mb-2 text-sm font-bold text-gray-700'>Confirma tu clave de ingreso</label>
                <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>

                    <input  type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='w-full p-2 leading-tight  bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline' placeholder='' />
                </div>





                <div className='flex justify-end  text-center mt-4'>
                    <button className='mt-2 mr-2 px-4 py-2 text-black rounded  transition-colors'> <Link to="/RegisterPaso2"> Atras </Link></button>
                    <button type='submit' className='mt-2 px-4 py-2 bg-[#242054] text-white rounded  transition-colors'>  Siguiente </button>
                </div>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}