import PixelTransition from "./PixelTransition1"
import {useNavigate} from "react-router-dom"
import Footer from "./Footer"
const Collection = () => {
 const Navigate =useNavigate();
  const HandleClick=(id)=>{
        Navigate(`/collection/${id}`);
}
  return (
    <div>
       <div>
       <video width="full" height="full" autoPlay loop muted >
      <source src="https://nimbuscluster.blob.core.windows.net/server01/hrx/home/topvideo-vE5EuNdnxgL0Ck7fK5IGu-1655477435" type="video/mp4" />
      </video>
      </div>
        <div>
          <h1 className="text-2xl font-bold text-center pt-5">Collections</h1>
          <p className="text-2xl font-bold text-center">Find Your Edge</p>
          <p className="text-2xl text-cyan-600 font-bold text-center">By Hritik Roshan</p>
        </div>
          <div className="p-10 flex flex-wrap  gap-10 ">
            <div>
            <PixelTransition 
        firstContent={
          <img className='bg-white'
            src="
           https://nimbuscluster.blob.core.windows.net/server01/hrx/product/productImage-5jBT9b9a301WEgmhEgWMG-1663325998
            "
            alt="default pixel transition content, a cat!"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#2C3333"
            }}
          >
            <p className="p-5" style={{ fontWeight: 900, fontSize: "1.5rem", color: "#395B64" }}>MODEL-HRX Predator with Front Suspension and Dual Disc Brakes 85% Assembled 26 T Mountain Cycle</p>
            </div>
          }
        gridSize={20}
        pixelColor='#A5C9CA'
        animationStepDuration={0.3}
        className="custom-pixel-card"
      />
      <div className="">
        <h1 className="text-cyan-800 font-bold text-2xl ml-[23%]">HRX PREDATOR</h1>
       <button onClick={()=>HandleClick("predator")}  className="w-30 ml-[30%] mt-[1%] text-2xl font-semibold bg-gray-400 rounded-xl hover:bg-red-800 cursor-pointer ">Buy Now</button>
</div>
</div>
<div>
          <PixelTransition
        firstContent={
          <img className='bg-white'
            src="
          https://nimbuscluster.blob.core.windows.net/server01/hrx/subcatImage/subcatImage-H_F5VuiBIpHsJCN4aRMRG-1662630893"
            alt="default pixel transition content, a cat!"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#2C3333"
            }}
          >
            <p className="p-5" style={{ fontWeight: 900, fontSize: "1.5rem", color: "#395B64" }}>HRX Premium Coloured 30 KG DM COMBO 16 Adjustable Dumbbell (30 kg)</p>
          </div>
        }
        gridSize={12}
        pixelColor='#A5C9CA'
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
       <div className="">
        <h1 className="text-cyan-800 font-bold text-2xl ml-[10%]">HRX DUMBBELL-30KG</h1>
       <button onClick={()=>HandleClick("dumbbell")}  className="w-30 ml-[30%] mt-[1%] text-2xl font-semibold bg-gray-400 rounded-xl cursor-pointer  hover:bg-red-800 ">Buy Now</button>
       </div>
      </div>
      <div>
      <PixelTransition
        firstContent={
          <img className='bg-white'
            src="
           https://nimbuscluster.blob.core.windows.net/server01/hrx/product/productImage-L0LRoS3JKilvziLUd7jhS-1662623992
            "
            alt="default pixel transition content, a cat!"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#2C3333"
            }}
          >
            <p className="p-5" style={{ fontWeight: 900, fontSize: "1.5rem", color: "#395B64" }}>Unisex Black Lifestyle Backpack</p>
            
          </div>
        }
        gridSize={12}
        pixelColor='#A5C9CA'
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
       <div className="">
        <h1 className="text-cyan-800 font-bold text-2xl ml-[23%]">HRX BAGPACK</h1>
       <button onClick={()=>HandleClick("bagpack")}  className="w-30 ml-[30%] mt-[1%] text-2xl font-semibold bg-gray-400 cursor-pointer rounded-xl  hover:bg-red-800">Buy Now</button>
       </div>
      </div>
      <div>
      <PixelTransition
        firstContent={
          <img className='bg-white'
            src="
           https://nimbuscluster.blob.core.windows.net/server01/hrx/product/productImage-38gbSSJ24kq6rgB96WFSO-1662610620 "
            alt="default pixel transition content, a cat!"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#111"
            }}
          >
            <p className="p-5" style={{ fontWeight: 900, fontSize: "1.5rem", color: "#395B64" }}>Men Teal Blue Printed Pure Cotton T-shirt By HRX</p>
          </div>
        }
        gridSize={12}
        pixelColor='#A5C9CA'
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
       <div className="">
        <h1 className="text-cyan-800 font-bold text-2xl ml-[23%]">HRX T-SHIRT</h1>
       <button onClick={()=>HandleClick("tshirt")}  className="w-30 ml-[30%] mt-[1%] text-2xl font-semibold bg-gray-400 cursor-pointer rounded-xl  hover:bg-red-800 ">Buy Now</button>
       </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Collection