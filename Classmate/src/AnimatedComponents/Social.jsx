import Dock from './Dock';
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Social = () => {

     const items = [
    { icon: <CiFacebook size={30}/>},
    { icon: <FaXTwitter size={30} />},
    { icon: <FaInstagramSquare size={18} />},
    { icon: <FaYoutube
 size={18}/> }
  ];
  return (
    <Dock 
    items={items}
    panelHeight={60}
    baseItemSize={30}
    magnification={40}

  />
  )
}

export default Social