import './header.css'
import { NavLink} from 'react-router-dom'
function BlogHeader(){
    return (
        <div className="Header">
            <img src="https://manan-bedi2908.github.io/final-portfolio/ineuron.png" alt="" />
            <div>
                <NavLink to={'/'}><button>Home</button></NavLink>
                <button>About</button>
                <NavLink to={'/addblog'}><button>Add Blog</button></NavLink>
            </div>
        </div>
    )
}

export default BlogHeader;