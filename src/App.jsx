
import React, { Suspense } from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Count from './components/count/Count'
import Digitaltools from './components/digitaltools/Digitaltools'
import Steps from './components/Steps/Steps'
import Transparent from './components/transparent/Transparent'
import Workflow from './components/workflow/Workflow'
import Footer from './components/footer/Footer'
// import Card from './components/card/Card'

const App = () => {

  const getProducts = async () => {
    try {
      const res = await fetch('/products.json');
      const data = await res.json();
      return data;
    }catch{
      console.log('api is not working');
      
    }
  }

  const ProductsPromise = getProducts(); 

  return (
    <>
    <Navbar/>
    <Banner/>
    <Count/>
    <Suspense fallback={<div>Loading...</div>}>
    <Digitaltools ProductsPromise={ProductsPromise}/>
    </Suspense>
    <Steps/>
    <Transparent/>
    <Workflow/>
    <Footer/>
    </>
  )
}

export default App