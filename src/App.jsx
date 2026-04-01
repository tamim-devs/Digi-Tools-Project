import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Count from './components/count/Count'
import Digitaltools from './components/digitaltools/Digitaltools'
import Steps from './components/Steps/Steps'
import Transparent from './components/transparent/Transparent'
import Workflow from './components/workflow/Workflow'
import Footer from './components/footer/Footer'

const App = () => {
  const [view, setView] = useState("products"); 
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/products.json');
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log('API is not working', err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar/>
      <Banner/>
      <Count/>
      {loading ? (
        <div className="text-center py-20">Loading...</div>
      ) : (
        <Digitaltools
          view={view}
          setView={setView}
          cart={cart}
          setCart={setCart}
          products={products}
        />
      )}
      <Steps/>
      <Transparent/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App