import React from 'react'
import SectionHeading from './SectionsHeading' // Pastikan path sudah benar
import Card from './Card' // Pastikan path sudah benar

const Category = ({ title, data }) => {
  return (
    <>
      <SectionHeading title={title} />
      {data && data.map((item, index) => {
        return (
          <Card
            key={index}
            title={item?.title}
            description={item?.description}
            imagePath={item?.image}
            actionArrow={true}
          />
        )
      })}
    </>
  )
}

export default Category