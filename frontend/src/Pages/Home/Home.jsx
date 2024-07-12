import React from 'react'
import {  } from 'react-icons/bi';
import profilePicture from '../../assets/Images/Photo.jpg'
import '../../css/main.css'
import Header from '../../components/Header';


const Home = () => {
  
    const data = {
        name: 'Marisol Domi',
        balance: "$5.435,00 usd"
    }
    
  
return (
    
    <div className='main'>

    {/* header */}

    <Header/>
    
    {/* User Info Section */}    

    {/* <div className='flex flex-col items-center justify-center min-h-screen bg-white'></div> */}

    <section id='main-container' className='container flex flex-col  items-center space-y-5 '>
        <div className='flex justify-around items-center gap-5' >        
            
            <div className='flex items-center justify-center gap-10 pt-3'>
                <div className='flex flex-col'> 
                    <h3 className='text-base font-medium '> Bienvenida </h3>
                    <span className='text-xl text-primary text-[24px]'> {data.name} </span>
                </div>
                <img src={profilePicture} className='h-[120px] w-[120px]' alt="" />
            </div>        
            
            

        </div>

        <section id='account-info'>
            <p> El saldo actual de tu cuenta es </p>
            <p className='text-[36px]'> {data.balance } </p>
        </section>

        <p> ¿Que quieres hacer hoy? </p>


        {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">  */}

        {/* p-5 w-[95%] grid grid-cols-2 grid-rows-2 gap-4 */}

        <section id='operations-buttons' className='flex justify-center w-[90%]'>        

            <div className="w-11/12 max-w-screen-lg mx-auto grid grid-cols-2 gap-4">

            
            <div> 
            <div className="flex flex-col items-center justify-center  bg-lightGrey text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
                <div>
                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7295 20.865H51.2705M10.7295 31H41.135M10.7295 41.135H24.9191M15 61H47C54.732 61 61 54.732 61 47V15C61 7.26801 54.732 1 47 1H15C7.26801 1 1 7.26801 1 15V47C1 54.732 7.26801 61 15 61Z" stroke="#242054" stroke-width="1.5" stroke-miterlimit="1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>                                

                
            </div>
            <p className='text-center text-sm pt-1'> Ver mis movimientos </p>
            </div>
            
            <div>
            <div className="flex flex-col items-center justify-center bg-lightGrey  text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0889 0.874012L22.089 0.874033C22.789 1.14629 23.25 1.82032 23.25 2.57154V20.5715V21.3215H24H57.4285C58.4345 21.3215 59.25 22.137 59.25 23.1428C59.25 24.1487 58.4344 24.9643 57.4285 24.9643H2.5715C1.8491 24.9643 1.1951 24.5376 0.904248 23.8763L0.904216 23.8762C0.613408 23.2153 0.740711 22.4446 1.2288 21.9122L1.22882 21.9122L20.0859 1.34077L20.086 1.34075C20.5935 0.787046 21.3889 0.601698 22.0889 0.874012Z" stroke="#242054" stroke-width="1.5"/>
<path d="M36.75 39.4285V38.6785H36H2.57143C1.5655 38.6785 0.75 37.863 0.75 36.8571C0.75 35.8512 1.5655 35.0357 2.57143 35.0357H57.4285C58.1506 35.0357 58.8047 35.4625 59.0957 36.1237C59.3866 36.7849 59.2593 37.5553 58.7712 38.0881L39.9142 58.6593C39.4067 59.213 38.6113 59.3984 37.911 59.1261C37.2112 58.8539 36.75 58.1797 36.75 57.4285V39.4285Z" stroke="#575A5E" stroke-width="1.5"/>
                </svg>                
            </div>
            <p className='text-center text-sm pt-1'> Hacer transferencias </p>
            
            </div>

            <div>
            <div className="flex flex-col items-center justify-center bg-lightGrey  text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
                <svg width="62" height="69" viewBox="0 0 62 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.15 1H46.8499C50.7129 1 52.6443 1 54.202 1.54203C57.1559 2.56987 59.4751 4.9573 60.4735 7.9982C61 9.60183 61 11.5902 61 15.5669V62.2473C61 65.108 57.7167 66.626 55.6397 64.7253C54.4194 63.6087 52.5806 63.6087 51.3603 64.7253L49.75 66.199C47.6114 68.156 44.3886 68.156 42.25 66.199C40.1114 64.242 36.8887 64.242 34.75 66.199C32.6113 68.156 29.3887 68.156 27.25 66.199C25.1113 64.242 21.8887 64.242 19.75 66.199C17.6113 68.156 14.3887 68.156 12.25 66.199L10.6397 64.7253C9.41933 63.6087 7.58067 63.6087 6.36034 64.7253C4.28334 66.626 1 65.108 1 62.2473V15.5669C1 11.5902 1 9.60183 1.52667 7.9982C2.52501 4.9573 4.844 2.56987 7.798 1.54203C9.35567 1 11.287 1 15.15 1Z" fill="#E4E7F3" stroke="#1C274C" stroke-width="1.5"/>
                <path d="M39.3333 29L34.5713 34.3333L22.6666 21" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M46 46H16" stroke="#575A5E" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                
            </div>
            <p className='text-center text-sm pt-1'> Pagar mis servicios </p>
            
            </div>

            <div>
            <div className="flex flex-col items-center justify-center bg-lightGrey  text-white font-semibold rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
            <svg width="60" height="69" viewBox="0 0 60 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59.25 16.75V34.6667C59.25 38.5902 55.642 41.9167 51 41.9167H9C4.35817 41.9167 0.75 38.5902 0.75 34.6667V16.75H59.25ZM48 25.9167H39C37.0144 25.9167 35.25 27.3657 35.25 29.3333C35.25 31.3009 37.0144 32.75 39 32.75H48C49.9856 32.75 51.75 31.3009 51.75 29.3333C51.75 27.3657 49.9856 25.9167 48 25.9167ZM51 0.75C55.642 0.75 59.25 4.07654 59.25 8V9.91667H0.75V8C0.75 4.07655 4.35818 0.75 9 0.75H51Z" stroke="#242054" stroke-width="1.5"/>
</svg>

                
            </div>
            <p className='text-center text-sm pt-1'> Ver mis productos </p>
            
            </div>



            </div>



        </section>




    </section>

        
    </div> 
  )
}

export default Home