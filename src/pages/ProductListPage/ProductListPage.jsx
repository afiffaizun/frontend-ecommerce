import React, { useMemo } from 'react'
import FilterIcon from '../../components/common/FilterIcon'
import content from '../../data/content.json'

const categories = content?.categories;
const ProductListPage = ({categoryType}) => {
  
  const categoryContent = useMemo(() =>{
    return categories?.find((category)=> category.code === categoryType);
  },[categoryType]) 
  
  return (
    <div>
      <div className='flex'>
        <div className='w-[20%] p-[10px] rounded-lg m-[20px]'>
          {/* Filter Section */}
          <div className='flex justify-between'>
            <p className='text-[16px] text-gray-600'>Filter</p>
            <FilterIcon />
          </div>

          <div>
            <p className='text-[16px] text-black mt-5'>Categoris</p>
          </div>
        </div>

        <div>
          <p>{categoryContent?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductListPage
