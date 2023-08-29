import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ReadBlog = ()=>{
    const {id} = useParams()
    const [singleData,setSingleData] = useState({})

    const getData = async() => {
        try{
            const resp = await fetch(`http://localhost:8080/blog/${id}`)
            const parseData = await resp.json();
            setSingleData(parseData || {})
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    return (
        <div id="readBlog">
            <img src={singleData?.img} alt="" />
            <h1>Blog Title: {singleData?.title}</h1>
            <p>Full Blog: {singleData?.content}</p>
        </div>
    )
}