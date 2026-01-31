import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Store from './pages/Store.jsx';
import ContactUs from './components/ContactUS.jsx';
import ProductDetails from './pages/ProductDetailsPage.jsx';
import ScrollToHash from './ScrollToHash.jsx';


function App() {
  
  return (
    <>
        <ScrollToHash/>
        <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/store' element={<Store/>} />
      <Route path="/product/:id" element={<ProductDetails/>} />
    </Routes>
    </>
  )
}

export default App;
