import {Link} from "react-router-dom"

export const Footer=()=>{
    return(
        <footer className="flex justify-center my-4">
            
            <Link className="mx-4" to="/"><h1>@2023 - JOOVABE</h1></Link> 
        </footer>
    )
}