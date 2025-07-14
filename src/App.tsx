import { Outlet } from 'react-router-dom';
import Navbar from './assets/components/common/Navbar';
import Footer from './assets/components/common/Footer';
import ScrollToTop from './assets/components/common/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
