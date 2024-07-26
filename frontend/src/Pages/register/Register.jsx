import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({
        name: '',
        dni: '',
        email: '',
        phoneNumber: '',
        birthDate: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        dni: '',
        email: '',
        phoneNumber: '',
        birthDate: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Limpiar el error al cambiar el valor
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let trimmedValue = value.trim(); // Eliminar espacios al inicio y al final

        if (name === 'name') {
            const regex = /^[A-Za-zÑñ\s]*$/; // Solo permitir letras del alfabeto latino, ñ y espacios

            if (!regex.test(trimmedValue)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    name: 'Solo se permiten letras y espacios'
                }));
                return;
            }

            if (trimmedValue.length > 30) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    name: 'Máximo 15 caracteres'
                }));
                return;
            }

            if (trimmedValue.length === 1) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    name: 'El nombre no puede tener un solo carácter'
                }));
                return;
            }

            if (/[\.,]/.test(trimmedValue)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    name: 'No se permiten puntos ni comas'
                }));
                return;
            }
        } else if (name === 'dni') {
            trimmedValue = trimmedValue.replace(/\s+/g, ''); // Eliminar todos los espacios
            const regex = /^[A-Za-z0-9]*$/; // Permitir letras y números

            if (trimmedValue.length < 7 || trimmedValue.length > 16) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    dni: 'Debe tener entre 7 y 16 caracteres'
                }));
                return;
            }

            if (trimmedValue.length === 6) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    dni: 'No puede tener exactamente 6 caracteres'
                }));
                return;
            }

            if (!regex.test(trimmedValue)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    dni: 'No se permiten caracteres especiales'
                }));
                return;
            }

            // Validar que al menos uno de los caracteres sea una letra si hay letras en el DNI
            if (/[A-Za-z]/.test(trimmedValue) && !/[A-Za-z]/.test(trimmedValue)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    dni: 'Debe contener al menos una letra si se incluyen letras'
                }));
                return;
            }
        } else if (name === 'phoneNumber') {
            const cleanedValue = value.replace(/\s+/g, ''); // Eliminar todos los espacios
            const regex = /^[0-9]*$/; // Solo permitir números

            if (!regex.test(cleanedValue)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    phoneNumber: 'Solo se permiten números'
                }));
                return;
            }

            setForm((prevForm) => ({ ...prevForm, phoneNumber: cleanedValue }));
        } else if (name === 'birthDate') {
            const today = new Date();
            const birthDate = new Date(value);
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            const dayDiff = today.getDate() - birthDate.getDate();

            if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    birthDate: 'Debes tener al menos 18 años'
                }));
                return;
            }

            if (age > 110) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    birthDate: 'La edad no puede ser mayor de 110 años'
                }));
                return;
            }
        }

        setForm((prevForm) => ({ ...prevForm, [name]: trimmedValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar que todos los campos estén llenos excepto DNI
        const newErrors = {};
        Object.keys(form).forEach(key => {
            if (key !== 'dni' && !form[key]) {
                newErrors[key] = 'Este campo es obligatorio';
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await fetch('https://plataforma-i.onrender.com/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (response.ok) {
                navigate('/RegisterPaso2', { state: { email: form.email } });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
// Comentario de prueba. 
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-white'>
            {/* Logo Essential Bank */}
            <div className='mb-8 text-center'>
                <h1 className='text-6xl font-bold text-blue-500'>Essentialll</h1>
                <h2 className='text-4xl font-bold text-blue-700'>Bank</h2>
            </div>

            {/* Bienvenido */}
            <div>
                <h2 className='text-4xl mb-8'> Crea tu nueva cuenta </h2>
            </div>

            <div className='w-full max-w-xs'>
                <form onSubmit={handleSubmit}>
                    {/* Nombre completo input */}
                    <label className='block mb-2 text-sm font-bold text-gray-700'>Nombre completo</label>
                    <div className='flex items-center mb-6 border rounded shadow bg-greyDesign'>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full p-2 leading-tight bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline'
                            placeholder=''
                        />
                    </div>
                    {errors.name && <p className='text-red-500 text-xs italic'>{errors.name}</p>}

                    {/* Documento de identidad input */}
                    <label className='block mb-2 text-sm font-bold text-gray-700'>Documento de identidad</label>
                    <div className='flex items-center mb-6 border rounded shadow bg-greyDesign'>
                        <input
                            type='text'
                            name='dni'
                            value={form.dni}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full p-2 leading-tight bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline'
                            placeholder=''
                        />
                    </div>
                    {errors.dni && <p className='text-red-500 text-xs italic'>{errors.dni}</p>}

                    {/* Correo electrónico input */}
                    <label className='block mb-2 text-sm font-bold text-gray-700'>Correo electrónico</label>
                    <div className='flex items-center mb-6 border rounded shadow bg-greyDesign'>
                        <input
                            type='text'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full p-2 leading-tight bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline'
                            placeholder=''
                        />
                    </div>
                    {errors.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}

                    {/* Fecha de nacimiento input */}
                    <label className='block mb-2 text-sm font-bold text-gray-700'>Fecha de nacimiento</label>
                    <div className='flex items-center mb-6 border rounded shadow bg-greyDesign'>
                        <input
                            type='date'
                            name='birthDate'
                            value={form.birthDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full p-2 leading-tight bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline'
                            placeholder=''
                        />
                    </div>
                    {errors.birthDate && <p className='text-red-500 text-xs italic'>{errors.birthDate}</p>}

                    {/* Número de teléfono input */}
                    <label className='block mb-2 text-sm font-bold text-gray-700'>Número de teléfono</label>
                    <div className='flex items-center mb-6 border rounded shadow bg-greyDesign'>
                        <input
                            type='text'
                            name='phoneNumber'
                            value={form.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full p-2 leading-tight bg-greyDesign text-gray-700 border-none focus:outline-none focus:shadow-outline'
                            placeholder=''
                        />
                    </div>
                    {errors.phoneNumber && <p className='text-red-500 text-xs italic'>{errors.phoneNumber}</p>}


                    <div className='flex justify-end  text-center mt-4'>
                        <button className='mt-2 mr-2 px-4 py-2 text-black rounded  transition-colors'> <Link to="/"> Atras </Link></button>
                        <button type='submit' className='mt-2 px-4 py-2 bg-[#242054] text-white rounded  transition-colors'> Siguiente </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
