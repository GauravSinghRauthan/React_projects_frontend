import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style.css/BlogCard.css'

export const BlogCard = (props)=>{
    const {img,title,desc,id:_id ,setBlogData,blogData} = props
    // const deleteBlog = ()=>{
    //     const newArr = blogData.filter((e,i)=>_id!==i)
    //     setBlogData([...newArr])
    //     localStorage.setItem("blogData",JSON.stringify(newArr))
    // }
    const deleteBlog = async() => {
        try{
            const resp = await fetch(`http://localhost:8080/blog/${_id}`,{
                method: "DELETE"
            })
            const parseData = await resp.json();
            setBlogData(...[parseData.updatedData] || [])
        }catch(err){
            console.log(err.message)
        }
    }
    return(
        <div className="blogCard">
            <img src={img} alt="" />
            <h1>Blog Title: {title}</h1>
            <p>
                blog Description: {desc}
            </p>
            <NavLink to={`/read/${_id}`}><button>Read Blog</button></NavLink>
            <button>EDit Blog</button>
            <button onClick={deleteBlog}>Delete Blog</button>
        </div>
    )
}

export default BlogCard;