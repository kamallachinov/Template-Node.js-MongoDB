
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbarr from './Components/Navbarr/Navbarr';
import ProductProvider from './Pages/Context/Products';

function App() {
  return (
    <>
      <ProductProvider>
        <Navbarr />
        <Outlet />
        <Footer />
      </ProductProvider>

    </>
  );
}

export default App;
