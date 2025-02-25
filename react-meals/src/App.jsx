
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NayLayoutComponent from "./components/NayLayoutComponent";

import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import MealsPage from "./page/MealsPage";
import MealsDetailsPage from "./page/MealsDetailsPage";
import NotFoundPage from "./page/NotFoundPage";



function App() {


  return (
    <>
      {/* <h1 className='text-blue-900'>Hallo Tailwind</h1> */}
        
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<NayLayoutComponent/>} >
                <Route index element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/meals" element={<MealsPage/>} />
                {/* Wildcrd sign (*) Auch in Css */}
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
            
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
