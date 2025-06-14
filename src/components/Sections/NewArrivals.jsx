import React from 'react'
import SectionsHeading from './SectionsHeading/SectionsHeading'
import Card from '../Card/Card'
import Jeans from '../../assets/img/jeans.jpg'   
import Shirts from '../../assets/img/shirts.jpg'
import Tshirt from '../../assets/img/tshirts.jpeg'
import Dresses from '../../assets/img/dresses.jpg'
import Joggers from '../../assets/img/joggers.jpg'
import Kurtis from '../../assets/img/kurtis.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../utils/Sectionconstants';
import './NewArrivals.css';

const items = [{
    'title':'Jeans',
    imagePath:Jeans
},{
    'title':'Shirts',
    imagePath:Shirts
},{
    'title':'T-Shirts',
    imagePath:Tshirt
},{
    'title':'Dresses',
    imagePath:Dresses
},{
    'title':'Joggers',
    imagePath:Joggers
},{
    'title':'Kurtis',
    imagePath:Kurtis
}]

const NewArrivals = () => {
  return (
    <>
      <SectionsHeading title={'New Arrivals'}/>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        arrows={true}
        itemClass={'react-multi-carousel-item'}
        className='px-8'
      >
        {items && items.map((item, index) => (
          <Card key={item.title + index} title={item.title} imagePath={item.imagePath} />
        ))}
      </Carousel>
    </>
  )
}

export default NewArrivals