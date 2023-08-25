
import BlogCard from '../components/BlogCard.jsx';
import '../style.css/HomePage.css'

function HomePage({prev,setBlogData}){
    
    return(
        <div id='HomeBlog'>
            

            <div id='parentCard'>
                {
                    prev?.map((e,i)=><BlogCard img={e.img} title={e.title} desc={e.desc} id={i} blogData={prev} setBlogData={setBlogData}/>)
                }
            </div>
        </div>
    )
}

export default HomePage;