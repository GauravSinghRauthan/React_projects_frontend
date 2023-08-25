import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ReadBlog = ({blogData})=>{
    const {title} = useParams()
    const [singleData,setSingleData] = useState({})

    useEffect(()=>{
        const singleArray = blogData.filter((e,i)=>{
            return title==i
        });
        setSingleData({...singleArray[0]});
        console.log(singleArray)
    },[title,blogData])
    return (
        <div id="readBlog">
            <img src={singleData?.img} alt="" />
            <h1>Blog Title: {singleData?.title}</h1>
            <p>Full Blog: {singleData?.content}</p>
        </div>
    )
}