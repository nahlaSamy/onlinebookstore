import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AuthLayout from './modules/SharedModule/components/AuthLayout/AuthLayout'
import NotFound from './modules/SharedModule/components/NotFound/NotFound'
import Login from './modules/AuthModule/components/Login/Login'
import Register from './modules/AuthModule/components/Register/Register'
import ForgetPass from './modules/AuthModule/components/ForgetPass/ForgetPass'
import ResetPass from './modules/AuthModule/components/ResetPass/ResetPass'
import MasterLayout from './modules/SharedModule/components/MasterLayout/MasterLayout'
import LandingPage from './modules/MasterModule/components/LandingPage/LandingPage'
import BooksList from './modules/MasterModule/components/Cart/BooksList/BooksList'
import Cart from './modules/MasterModule/components/Cart/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import ProtectedRoute from './modules/SharedModule/components/ProtectedRoute/ProtectedRoute'
import ChangePass from './modules/AuthModule/components/ChangePass/ChangePass'
import Product from './modules/MasterModule/components/Products/Product'

function App() {
  let [userData, setUserData] = useState(null);

  const saveUserData = () => {
      let encodedToken = localStorage.getItem('userToken');
      if (encodedToken) {
          let decodedToken = jwtDecode(encodedToken);
          setUserData(decodedToken);
          console.log(decodedToken);
      } else {
          console.error("No token found");
      }
  };
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login saveUserData={saveUserData} /> },
        { path: 'login', element: <Login saveUserData={saveUserData}/> },
        { path: 'register', element: <Register /> },
        { path: 'forget-pass', element: <ForgetPass /> },
        { path: 'reset-pass', element: <ResetPass /> },
        { path: 'change-pass', element: <ChangePass /> },

      ]
    },
    {
      path: 'dashboard',
      element:  <ProtectedRoute userData={userData}> <MasterLayout /></ProtectedRoute>,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: 'home', element: <LandingPage /> },
        { path: 'Product', element: <Product /> },
        { path: 'books-list', element: <BooksList /> },
        { path: 'cart', element: <Cart /> },
      ]
    },
  ])

  return (
    <>
    <RouterProvider router={routes}/>
    <ToastContainer/>

    </>
  )
}

export default App
