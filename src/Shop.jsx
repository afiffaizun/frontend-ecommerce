import React from 'react';
import Navigation from './components/Navigation/Navigation.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx';
import NewArrivals from './components/Sections/NewArrivals.jsx';
import Category from './components/Sections/Categories/Category.jsx';
import content from './data/content.json';
import Footer from './components/Footer/Footer.jsx'

function Shop() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <HeroSection />
    <NewArrivals />
    <Category title={content?.categories[0]?.title} 
        data={content?.categories[0]?.data}/>
    <Category title={content?.categories[1]?.title} 
        data={content?.categories[1]?.data}/>
    <Footer content={content}/>
    </>
  )
}

export default Shop
