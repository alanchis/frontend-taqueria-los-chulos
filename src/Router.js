import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from "./components/Layout/Layout"


function Router() {
  return (
      <>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>









            </Route>
          </Routes>
        </BrowserRouter>


      </>
  );
}

export default Router;
