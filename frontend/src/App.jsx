
import './App.css'
import Login from "./Pages/Login/Login.jsx"
import Register from "./Pages/register/Register.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register2 from './Pages/register/Register2.jsx';
import Register3 from './Pages/register/Register3.jsx';
import Home from './Pages/Home/Home.jsx'
import Transfer from './Pages/Transfer/Transfer.jsx'
// import Footer from './components/Footer'
// import Success from './Pages/Transfer/Success.jsx';
import TransferStepContainer from './Pages/Transfer/TransferStepContainer.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';

import './css/main.css'
import Pay from './Pages/Servicespay/Pay.jsx';
import PayStepContainer from './Pages/Servicespay/PayStepContainer.jsx';


import {AssistantProvider} from '../src/Providers/AssistantProvider.jsx'
import { UserProvider } from './Providers/UserProvider.jsx';

// Profile y sub paginas
import ProfilePage from './Pages/ProfilePage/ProfilePage.jsx';
import EditFullNamePage from './Pages/EditFullNamePage/EditFullNamePage.jsx';
import EditPhoneNumber from './Pages/EditFullNamePage/EditPhoneNumber.jsx';
import EditEmail from './Pages/EditEmail/EditEmail.jsx';
import EditPassword from './Pages/EditPassword/EditPassword.jsx';

import PrivateRoutes from './auth/PrivateRoutes.jsx';


function App() {


  return (

    <div className='app'> 



      <AssistantProvider> 
        <UserProvider> 
        <BrowserRouter>


          <Routes>

            <Route path='/' element={<Login />} />


            <Route path='/Register' element={<Register />} />
            <Route path='/RegisterPaso2' element={<Register2 />} />
            <Route path='/RegisterPaso3' element={<Register3 />} />


            <Route element={<PrivateRoutes />} >
              <Route path='/Home' element={<Home />} />
              <Route path='/Transfers' element={<Transfer />} />
              <Route path='/TransferStepContainer' element={<TransferStepContainer />} />
              <Route path='/Pay' element={<Pay />} />
              <Route path='/PayStepContainer' element={<PayStepContainer />} />
              <Route path='Profile' element={<ProfilePage />} />
              <Route path='editName' element={<EditFullNamePage/>} />
              <Route path='/editPassword' element={<EditPassword/>} />
              <Route path='/editPhoneNumber' element={<EditPhoneNumber/>} />
              <Route path='/editEmail' element={<EditEmail/>} />
            </Route>




            <Route path="*" element={<ErrorPage />} />


          </Routes>


        </BrowserRouter>
        </UserProvider>
      </AssistantProvider>


    </div>

  )
}

export default App
