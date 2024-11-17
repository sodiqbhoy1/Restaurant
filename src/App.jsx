import { Route, Routes } from "react-router-dom"
import BuyerSignup from "./components/BuyerSignup"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Restaurant from "./components/Restaurant"
import RiderSignup from "./components/RiderSignup"
import SellerSignup from "./components/SellerSignup"


const App = () => {
  return (

<>

<Navbar/>

    <div className="mx-3">

<Routes>

<Route path="/" element={<Home/>} />  
<Route path="/restaurant" element={<Restaurant/>} />  
<Route path="/signup" element={<BuyerSignup/>} />  
<Route path="/sellersignup" element={<SellerSignup/>} />  
<Route path="/ridersignup" element={<RiderSignup/>} />  
  

</Routes>  



<Footer/>

    </div>
</>
  )
}

export default App
