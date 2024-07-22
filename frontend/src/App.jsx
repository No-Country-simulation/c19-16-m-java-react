
import './App.css'
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/register/Register.jsx"
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Register2 from './pages/register/Register2.jsx';
import Register3 from './pages/register/Register3.jsx';
import Home from './pages/Home/Home.jsx'
import Transfer from './pages/Transfer/Transfer'
// import Footer from './components/Footer'
// import Success from './Pages/Transfer/Success.jsx';
import TransferStepContainer from './pages/Transfer/TransferStepContainer.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

import './css/main.css'
import Pay from './pages/Servicespay/Pay.jsx';
import PayStepContainer from './pages/Servicespay/PayStepContainer.jsx';

import {AssistantProvider} from '../src/Providers/AssistantProvider.jsx'

import PrivateRoutes from './auth/PrivateRoutes.jsx';

function App() {


  return (

    <>


    
      <AssistantProvider>
      <BrowserRouter>
      

        <Routes>

          <Route path='/' element={<Login />} />


          <Route path='/Register' element={<Register />} />
          
            <Route element={<PrivateRoutes />} > 
              <Route path='/Home' element={<Home />} />
              <Route path='/RegisterPaso2' element={<Register2 />} />
              <Route path='/RegisterPaso3' element={<Register3 />} />
              <Route path='/Transfers' element={<Transfer />} />
              <Route path='/TransferStepContainer' element={<TransferStepContainer />} />
              <Route path='/Pay' element={<Pay />} />
              <Route path='/PayStepContainer' element={<PayStepContainer />} />
            </Route>

            
          
          
          <Route path="*" element={<ErrorPage />} />


        </Routes>

        
      </BrowserRouter>
      </AssistantProvider>
      

    </>

  )
}

export default App
