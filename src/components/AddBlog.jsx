import { useState } from 'react';
import '../style.css/form.css'

function AddBlog({onUpdate,prev=[]}){
    const[blogData,setBlogData] = useState({
        title: "",
        img: "",
        desc: "",
        content: ""
    })
    const submitData = ()=>{
        const newData = [blogData,...prev]
        onUpdate([blogData,...prev])
        localStorage.setItem('blogData',JSON.stringify(newData))
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