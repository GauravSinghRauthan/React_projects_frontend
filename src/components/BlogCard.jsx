import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style.css/BlogCard.css'

export const BlogCard = (props)=>{
    const {img,title,desc,id,setBlogData,blogData} = props
    const deleteBlog = ()=>{
        const newArr = blogData.filter((e,i)=>id!==i)
        setBlogData([...newArr])
        localStorage.setItem("blogData",JSON.stringify(newArr))
    }
    return(
        <div className="blogCard">
            <img src={img} alt="" />
            <h1>Blog Title: {title}</h1>
            <p>
                blog Description: {desc}
            </p>
            <NavLink to={`/read/${id}`}><button>Read Blog</button></NavLink>
            <button>EDit Blog</button>
            <button onClick={deleteBlog}>Delete Blog</button>
        </div>
    )
}

export default BlogCard;