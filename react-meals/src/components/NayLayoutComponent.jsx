import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";


const NayLayoutComponent = () => {
  return (

    <>
        <HeaderComponent />
        <Outlet />      
        <FooterComponent />
    </>
  )
}
export default NayLayoutComponent