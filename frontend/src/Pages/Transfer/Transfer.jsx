import React, { useState, useEffect } from 'react';
import '../../css/main.css'
import Header from '../../components/Header'
import { FiSearch } from 'react-icons/fi';
import user1Photho from '../../assets/Images/user1.jpg'
import Icon from '../../components/Icon/Icon'
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom'
import '../../css/main.css'
import { useUser} from '../../Providers/UserProvider'
import axios from 'axios';
const Transfer = () => {


  // const transfers = [

  //   { image: 'user1', name: 'Ana Morales', bank: 'Banco Bbva' },
  //   { image: 'user2', name: 'Antonio Navarro', bank: 'Caixa Bbva' },
  //   { image: 'user3', name: 'Gloria Ramos', bank: 'Mercado Libre Bank' },
  //   { image: 'user4', name: 'Paul Perez', bank: 'Banco One' },

  // ]

  const [user, setsetUser] = useUser()
  const [transfers, setTransfers] = useState();

  const API_URL_PROD = import.meta.env.VITE_API_URL_PROD

    

  useEffect(() => {
      
      if (!user._id) {
          const id = localStorage.getItem('id')
          console.log('id = ', id);                        
          getTransfer(id).then((data) => setTransfers(data))
          
      }

      async function  getTransfer(id) {
          const response = await axios.get(`${API_URL_PROD}/transations/transfers/${id}`)
          console.log('response ', response);
          return response.data
      }
  
  }, [])






  const [searchQuery, setSearchQuery] = useState('');



  return (
    <>






      <Header />

      <div className='main '>


        <div className='flex flex-col justify-center space-y-10'>
          <h1 className='text-center mt-10 text-[22px] '> Transferencias </h1>
          <div className="w-11/12 max-w-screen-lg mx-auto  ">
            
              <div className="flex flex-col items-center justify-center text-center bg-lightGrey text-black rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none box-shadow-btn">

                <Link to="/TransferStepContainer"> <span> Transferir a una nueva cuenta </span> </Link>
              </div>
            
            {/* <div>
              <div className="flex flex-col items-center justify-center text-center bg-lightGrey text-black rounded-lg p-5 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none" tabindex="0" aria-label="Home">
                <span> Transferir a una nueva cuenta internacional </span>
              </div>
            </div> */}
          </div>

          <h2 className='text-center '> Transferencias frecuentes </h2>


          <div className='flex items-center mx-auto bg-lightGrey rounded-full shadow-md overflow-hidden w-11/12'>
            <FiSearch className='text-darkGrey mx-4' />
            <input
              type="text"
              className='py-4 text-sm text-mediumGrey bg-lightGrey outline-none w-full'
              placeholder='Buscar transferencias frecuentes'
            />
          </div>

          <div className='flex flex-col items-center space-y-6 '>

            {transfers?.map((transfer, index) => (

              <div className='flex items-center  justify-between gap-5 mx-auto w-11/12 '>

                <img src={user1Photho} className='w-[50px]' alt="" />

                <div className='flex flex-col flex-grow  '>
                  <h4 className=''> {transfer.BeneficiaryName} </h4>
                  <p className=''> {transfer.BeneficiaryBank} </p>
                </div>

                <div>
                  <button className="p-2 ">
                    <Icon type={'StarFilled'} />
                  </button>

                  <button>
                    <Icon type={'KebabMenu'} />
                  </button>
                </div>

              </div>
            ))}

          </div>

        </div>


      </div>


      <Footer />

    </>
  )
}

export default Transfer