import React from 'react';
//import Navigation from './components/Navigation/Navigation.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx';
import NewArrivals from './components/Sections/NewArrivals.jsx';
import Category from './components/Sections/Categories/Category.jsx';
import content from './data/content.json';
import Footer from './components/Footer/Footer.jsx'

function Shop() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <NewArrivals />
      {/* Tampilkan semua kategori yang ada di content.categories */}
      {content?.categories?.map((cat) => (
        <Category key={cat.id} title={cat.name} description={cat.description} />
      ))}
      <Footer content={content.footer} />
    </>
  )
}

export default Shop
