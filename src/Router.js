import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import Layout from "./components/Layout/Layout"
import UsersState from './context/Users/UsersState';
import Auth from './routes/Auth';
import Public from './routes/Public';





import './Router.css'
import Menu from './components/Menu/Menu';
import Comentarios from './components/Comentarios/Comentarios';
import CommentsState from './context/Comentarios/CommentsState';



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
                      <Auth component={Menu} />
                    } 
                  />  


                <Route 
                    path="comentarios"
                    element={
                      <Auth component={Comentarios} />
                    } 
                  />  











              </Route>
            </Routes>
          </BrowserRouter>

        </UsersState>
        </CommentsState>


      </>
  );
}

export default Router;
