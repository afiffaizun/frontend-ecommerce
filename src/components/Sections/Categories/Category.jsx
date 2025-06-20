import React from 'react'
import SectionsHeading from '../SectionsHeading/SectionsHeading'
import Card from '../../Card/Card'

const Category = ({title,data}) => {
  return (
    <>
    <SectionsHeading title={title}/>
    <div className='flex items-center px-8 flex-wrap gap-10'>
    {data && data?.map((item,index)=>{
        return (
            <Card key={index} title={item?.title} description={item?.description} imagePath={item?.image}
             actionArrow={true} height={'240px'} width={'200px'}/>
        )
    })}
    </div>
    </>
  )
}

export default Category