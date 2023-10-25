import "./App.css";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import {Home} from "./Pages/Home"
import { Nav } from "./Pages/Nav";


function App() {
  
  return (<div className="App">
    
 <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router> 
    
  </div>)
}
export default App;