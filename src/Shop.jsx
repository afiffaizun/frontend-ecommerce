import React from 'react';
import Navigation from './components/Navigation/Navigation.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx';
import NewArrivals from './components/Sections/NewArrivals.jsx';

function Shop() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <HeroSection />
    <NewArrivals />
    </>
  )
}

export default Shop
