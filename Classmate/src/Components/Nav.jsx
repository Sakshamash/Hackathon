import { NavLink } from "react-router-dom";
const Nav = () => {

  
  return (
  <div className="flex items-center justify-center gap-x-10  text-m font-medium  text-white bg-black w-full  h-[10%] fixed z-1000 ">
    <NavLink className="h-7 mb-9 w-28 absolute left-1
    " to="/"><img src="https://www.hrxbrand.com/img/MicrosoftHRX.0fe18b05.png" alt="" /></NavLink>
    <NavLink to="/" className="focus:text-red-600 hover:text-xl"
    >Home</NavLink>
      <NavLink className="focus:text-red-600 hover:text-xl" to="/collection">Collection</NavLink>
        <NavLink className="focus:text-red-600 hover:text-xl"to="/press">Press Release</NavLink>
          <NavLink className="focus:text-red-600 hover:text-xl" to="/login">Login</NavLink>
    
    </div>
  )
}

export default Nav