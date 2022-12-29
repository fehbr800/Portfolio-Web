import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./components/Contact"
import Home from "./App"
export default function Routes(){

return(
    <Routes>
         <Route path="/" element={<Home />} />
        
        <Route path="/contact" element={<Contact />} />
        
    </Routes>
)

}