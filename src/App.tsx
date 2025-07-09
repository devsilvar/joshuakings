import { Outlet } from 'react-router-dom';
import Navbar from './assets/components/common/Navbar';
import Footer from './assets/components/common/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
