import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UsersState from './context/Users/UsersState';
import Auth from './routes/Auth';
import Public from './routes/Public';



import CommentsState from './context/Comentarios/CommentsState';


import './Router.css'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Layout from "./components/Layout/Layout"
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Comentarios from './components/Comentarios/Comentarios';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Carrito from './components/Carrito/Carrito';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AuthCarrito from './routes/AuthCarrito';



function Router() {
  return (
      <>
        <CommentsState>

        <UsersState>
        



          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
 
              <Route 
                  index 
                  element={
                    <Public component={Home}
                  />} 
                /> 

              


                <Route 
                    path="registro"
                    element={
                      <Auth component={Register} />
                    } 
                  />

                <Route 
                    path="login"
                    element={
                      <Auth component={Login} />
                    } 
                  /> 

                  
                <Route 
                    path="menu"
                    element={
                      <Public component={Menu} />
                    } 
                  />  


                <Route 
                    path="ubicacion"
                    element={
                      <Public component={Ubicacion} />
                    } 
                  />  


                <Route 
                    path="comentarios"
                    element={
                      <Public component={Comentarios} />
                    } 
                  />  

                <Route 
                    path="carrito"
                    element={
                      <AuthCarrito component={Carrito} />
                    } 
                  />  

                <Route path="*" element={<ErrorPage/>}></Route>












              </Route>
            </Routes>
          </BrowserRouter>

        </UsersState>
        </CommentsState>


      </>
  );
}

export default Router;
