import { Outlet } from "react-router-dom";
import Navbar from "./assets/components/common/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <footer>
      Here is teh footr
    </footer>
    </>
  )
}

export default App;
