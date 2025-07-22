import Card from "./Card"
import {Link} from "react-router-dom"
import Footer from "./Footer"
import CircularGallery from './CircularGalllery'
const Home = () => {
  return (
    <div>
      <div>
       <video width="full" height="full" autoPlay loop muted >
      <source src="https://nimbuscluster.blob.core.windows.net/server01/hrx/home/topvideo-vE5EuNdnxgL0Ck7fK5IGu-1655477435" type="video/mp4" />
      </video>
      </div>
      <div className=" flex flex-col justify-center pt-5 pl-5 ">
        <h2 className="text-red-500 text-center text-2xl font-bold">COLLECTION</h2>
        <h1 className="text-3xl text-center font-semibold">REDEFINE YOUR FITNESS</h1>  
        <h1 className="text-4xl text-center font-semibold">EXPERIENCE</h1>
        <div className="flex justify-around items-center flex-wrap gap-6 px-6 py-4">
          <Link to="/collection">
        <Card imagesrc="https://nimbuscluster.blob.core.windows.net/server01/hrx/categoryImage/categoryImage-YCtouA1AU0ekE2nACd24b-1692771819" caption="Apparel" category="APPAREL" />
        </Link>
         <Link to="/collection">
        <Card caption="Accesories" category="ACCESORIES"  imagesrc="https://nimbuscluster.blob.core.windows.net/server01/hrx/categoryImage/categoryImage-sz-6mrQdJF9G99qrrNrnH-1692771851"/>
        </Link>
        <Link to="/collection">
        <Card className="" caption="Equipment" category="EQUIPMENT"  imagesrc="https://nimbuscluster.blob.core.windows.net/server01/hrx/categoryImage/categoryImage-Q448uStaNzSNTBVaYnmlq-1692771864"/>
        </Link>
        <Link to="/collection">
        <Card caption="Bicycle" category="BICYCLE"  imagesrc="https://nimbuscluster.blob.core.windows.net/server01/hrx/categoryImage/categoryImage-VPlB8fGaZfWa-kNJY-nFZ-1692771837"/>
        </Link>
        </div>
        </div>
        {/* <div className="">
          <h2 className="flex justify-center items-center text-red-700 text-xl font-semibold">AFFILATE BRANDS</h2>
          <h1 className="flex justify-center items-center text-3xl font-bold">OUR PROUD PARTNERS</h1>
        <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery className="" bend={0.6} textColor="#ffffff" borderRadius={0.05} scrollEase={.1}/> */}
        <Footer/>        
      </div>

  )
}

export default Home