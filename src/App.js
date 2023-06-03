import Signup  from './Routecomp/Signup';
import Login from './Routecomp/Login'
import Home from './Routecomp/Home';
import Sell from './Routecomp/Sell'
import Buy from './Routecomp/Buy'
import Logout from './Routecomp/Logout';
import Exhibition from './Routecomp/Exhibition'
import Buynow from './Routecomp/Buynow'
import Privacy from './Routecomp/Privacy'
import Contact from './Routecomp/Contact'
import About from './Routecomp/About'
// import Navbar from './Routecomp/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
export default function App() {
  return (
    <div>
        <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Sell" element={<Sell/>}></Route>
        <Route path="/Buy" element={<Buy/>}></Route>
        <Route path="/Exhibition" element={<Exhibition/>}></Route>
        <Route path="/Buynow" element={<Buynow/>}></Route>
        <Route path="/Logout" element={<Logout/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    
    </div>
  )
};
