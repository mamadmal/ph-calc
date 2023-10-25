import {Link} from "react-router-dom"
export const Nav=()=>{
    return(      
    <nav className="flex w-full justify-center mt-5">
        <Link className="mx-4" to="/">Home</Link> | 
        
        <Link className="mx-4" to="https://github.com/mamadmal/ph-calc">Source</Link> 
      </nav>)
}