import Nav from "./Components/Nav"
import Mainroute from "./Mainroute"
import SplashCursor from './AnimatedComponents/Cursor'
const App = () => {
  return (
    <div className='w-screen h-screen'>
      <SplashCursor/>
      <Nav/>
      <Mainroute/>
      </div>
  )

}

export default App