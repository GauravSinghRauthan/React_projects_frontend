
import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard.jsx';
import '../style.css/HomePage.css'

function HomePage(){
    const [blogData,setblogData] = useState()
    const getData = async()=>{
        try{
            const resp = await fetch('http://localhost:8080/blog')
            const parseData = await resp.json()
            console.log(parseData)
            setblogData(parseData?.data||[])
        }catch(err){
            console.log(err.message)
        }
        
    }

    useEffect(()=>{
        getData()
    },[])
    
    return(
        <div id='HomeBlog'>
            

            <div id='parentCard'>
                {
                    blogData?.map((e,i)=><BlogCard img={e.img} title={e.title} desc={e.desc} id={e._id} blogData={blogData} setBlogData={setblogData}/>)
                }
            </div>
        </div>
    )
}

export default HomePage;