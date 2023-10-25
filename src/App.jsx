import "./App.css";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import {Home} from "./Pages/Home"
import { Nav } from "./Pages/Nav";
import {Footer} from "./Pages/Footer"


function App() {
  
  return (<div className="App">
    
 <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </Router> 
    
    
  </div>)
}
export default App;