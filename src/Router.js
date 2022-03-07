import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Layout from "./components/Layout/Layout"
import UsersState from './context/Users/UsersState';
import Auth from './routes/Auth';


function Router() {
  return (
      <>

        <UsersState>



          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>


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









              </Route>
            </Routes>
          </BrowserRouter>

        </UsersState>


      </>
  );
}

export default Router;
