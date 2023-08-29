
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddBlog from "../components/AddBlog";
import { ReadBlog } from "../pages/readBlog";



export const CustomRoutes= ()=>{
    
    
    return (
        
        <Routes>
            <Route path="/" element= {<HomePage />}/>
            <Route path="/addBlog" element= {<AddBlog />}/>
            <Route path="/read/:id" element={<ReadBlog />}/>
        </Routes>
    )
}