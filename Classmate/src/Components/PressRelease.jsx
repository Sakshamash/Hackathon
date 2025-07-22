import PixelTransition from './PixelTransition1';
import {Link} from "react-router-dom"
import Footer from "./Footer"
const PressRelease = () => {
  return (
    <div className=' bg-white text-white flex justify-center gap-10 flex-wrap'>
      <div className= 'w-full'>
      <h2 className='z-800 pl-10 pt-40 h-[20rem] text-4xl font-black text-white hover:text-yellow-300 bg-[url(https://nimbuscluster.blob.core.windows.net/server01/hrx/HRX/pr_banner.png)]'>Press Release </h2>
      {/* <img  className='bg-contain w-full opacity-45' src="https://nimbuscluster.blob.core.windows.net/server01/hrx/HRX/pr_banner.png" alt="" /> */}
      </div>
      <Link to="https://www.indiagreets.com/hrx-by-hrithik-roshan-and-eatfit-unveil-offline-stores-reinforce-the-strength-of-their-partnership-in-promoting-healthier-lifestyles/">
      <PixelTransition
        firstContent={
          <img className='bg-white'
            src="
            https://nimbuscluster.blob.core.windows.net/server01/hrx/pressRelease/pressRelease-llCgah7wjQNBl06Pwkj3--1690323521"
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
            <p style={{ fontWeight: 900, fontSize: "2rem", color: "#610a0a" }}>India Greets: HRX by Hrithik Roshan and EatFit Unveil Offline Stores!</p>
          </div>
        }
        gridSize={12}
        pixelColor='#0f0f0f'
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
</Link>
<Link to="https://www.lokmattimes.com/business/hrx-turns-the-official-fan-merchandise-partner-for-four-ipl-teams">
         <PixelTransition
        firstContent={
          <img className='bg-white'
            src="
            https://nimbuscluster.blob.core.windows.net/server01/hrx/pressRelease/pressRelease--K4laYESZsBl9FRGvLLwx-1691392451
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
              backgroundColor: "#111"
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "1.5rem", color: "#610a0a" }}>PRESS RELEASE:
Lokmat Times: HRX turns the Official Fan Merchandise Partner for Four IPL Teams</p>
          </div>
        }
        gridSize={12}
        pixelColor='#0f0f0f'
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
      </Link>
      <Link to="https://republicnewstoday.com/">
      <PixelTransition
        firstContent={
          <img className='bg-white'
            src="
            https://nimbuscluster.blob.core.windows.net/server01/hrx/pressRelease/pressRelease-w6SSlhMpvhuCXI9zketw9-1690323677
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
              backgroundColor: "#111"
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "1.5rem", color: "#610a0a" }}>PRESS RELEASE:
Republic News Today: HRX by Hrithik Roshan announces its first ever virtual marathon</p>
          </div>
        }
        gridSize={12}
        pixelColor='#0f0f0f'
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
      </Link>
      <Link to="https://www.lokmattimes.com/business/hrx-turns-the-official-fan-merchandise-partner-for-four-ipl-teams">
      <PixelTransition
        firstContent={
          <img className='bg-white'
            src="
           https://nimbuscluster.blob.core.windows.net/server01/hrx/pressRelease/pressRelease-jiBxMM-kH6ipT_JNx7AKP-1691392664
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
              backgroundColor: "#111"
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "1.5rem", color: "#610a0a" }}>PRESS RELEASE:
Filmy Carcha: Hrithik Roshan announces the first HRX offline store to be unveiled in Bangalore, on his birthday</p>
          </div>
        }
        gridSize={12}
        pixelColor='#0f0f0f'
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
      </Link>
      <Link to="https://www.peepingmoon.com/">
      <PixelTransition
        firstContent={
          <img className='bg-white'
            src="
           https://nimbuscluster.blob.core.windows.net/server01/hrx/pressRelease/pressRelease-_HJ1uAmyKeEDf7eYzCyzA-1691392744
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
              backgroundColor: "#111"
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "1.5rem", color: "#610a0a" }}>PRESS RELEASE:
Peeping Moon: Owning a sportwear brand of his own - HRX to slaying elegant attires, birthday icon Hrithik Roshan proves to be a true fashionable star</p>
          </div>
        }
        gridSize={12}
        pixelColor='#0f0f0f'
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
      </Link>

<Footer className=""/>
</div> )
}

export default PressRelease