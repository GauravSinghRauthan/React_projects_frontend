import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddBlog from "../components/AddBlog";
import { ReadBlog } from "../pages/readBlog";



export const CustomRoutes= ()=>{
    const [blogData,setblogData] = useState(JSON.parse(localStorage.getItem('blogData'))||[])
    return (
        
        <Routes>
            <Route path="/" element= {<HomePage prev={blogData} setBlogData={setblogData}/>}/>
            <Route path="/addBlog" element= {<AddBlog onUpdate={setblogData} prev={blogData}/>}/>
            <Route path="/read/:title" element={<ReadBlog blogData={blogData}/>}/>
        </Routes>
    )
}