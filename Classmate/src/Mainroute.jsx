import {Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import Collection from "./Components/Collection"
import PressRelease from "./Components/PressRelease"
import Login from "./Components/Login"
import Detail from "./Components/Detail"
const Mainroute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/press" element={<PressRelease/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/collection/:id" element={<Detail/>}/>
        </Routes>
    </div>
  )
}

export default Mainroute