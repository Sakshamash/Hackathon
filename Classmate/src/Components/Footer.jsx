import GlassIcons from '../AnimatedComponents/GlassIcons' 
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import {Link} from "react-router-dom"
const Footer = () => {
  const items = [
  { icon: <CiFacebook />, color: 'blue', label: 'Facebook',Link:"https://www.facebook.com/hrxbrand" },
  { icon: <FaInstagramSquare/>, color: 'purple', label: 'Instagram' },
  { icon: <FaXTwitter />, color: 'red', label: 'Twitter' },
  { icon: <FiYoutube/>, color: 'indigo', label: 'Youtube' },
];
  return (
    <div className="flex gap-10 items-center flex-wrap justify-around w-full h-full bg-black text-white">
          <div style={{position: 'relative' }}>
            <Link to={items.Link}>
  <GlassIcons items={items} className="custom-class"/>
            </Link>
</div>
        
        <div className="">
          <p className="text-red-700 font-semibold ">Navigation</p>
         <Link to="https://www.hrxbrand.com/terms-conditions">
          <p> Terms & Condition </p>
          </Link>
        </div>
        <div>
        <Link to="/collection">  
          <p className="text-red-700 font-semibold"> COLLECTIONS</p>
          <p>Featured</p>
          </Link>
        </div>
        <div className="flex flex-col gap-3 mr-[5%] pt-10 pb-10">
          
          <p className="text-red-700 font-semibold">COMMUNITY</p>
          <Link to="https://www.hrxbrand.com/hrxhub">
          <p >HRX HUB</p>
          </Link>
          <Link to="https://bit.ly/HRX-CULT-HRXWORKOUT">   <p>Workouts</p>
          </Link>
          <Link to="https://open.spotify.com/show/5qLFrfXUQe11pc2afVfVV0?si=iHsDUhP0RxqdLZeqWCjo9gUse&nd=1&dlsi=1f083c25a85944f9&_authfailed=1">
          <p>Podcasts</p>
          </Link>
          <Link to="https://www.hrxbrand.com/events">
          <p>HRX COMMUNITY</p>
        </Link>
        </div>
    </div>
  )
}

export default Footer