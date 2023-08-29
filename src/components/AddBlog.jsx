import { useState } from 'react';
import '../style.css/form.css'


function AddBlog(){
    const[blogData,setBlogData] = useState({
        title: "",
        img: "",
        desc: "",
        content: ""
    })
    const submitData = ()=>{
        createBlog(blogData)
    }

    const createBlog = async (data)=>{
        try{
            const resp = await fetch("http://localhost:8080/blog/addblog",{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body:JSON.stringify({...data,description:data.desc})
            })

            const parseResp = await resp.json()

            console.log(parseResp)
            
        }catch(err){
            console.log(err.message)
        }
        

    }
    return(
        <div id='formParent'>
            <div id="form">
                <h1>Add blog! Here</h1>
                <input type="text" placeholder="Enter img url" value={blogData.img} onChange={(e)=>setBlogData({...blogData,img:e.target.value})}/>
                <input type="text" placeholder="Enter Title of ur Blog" value={blogData.title} onChange={(e)=>setBlogData({...blogData,title:e.target.value})}/>
                <input type="text" placeholder="enter description of blog" value={blogData.desc} onChange={(e)=>setBlogData({...blogData,desc:e.target.value})}/>
                <textarea name="" placeholder='type your Blog' id="" cols="30" rows="10" value={blogData.content} onChange={(e)=>setBlogData({...blogData,content:e.target.value})}></textarea>
                <button onClick={submitData}>Add blog</button>
            </div>
        </div>
    )
}

export default AddBlog;