import React, { useMemo } from 'react'
import FilterIcon from '../../components/common/FilterIcon'
import content from '../../data/content.json'
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';

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

          {/* Tipe Produk */}
          <div>
            <p className='text-[16px] text-black mt-5'>Categoris</p>
            <Categories types={categoryContent?.types} />
            
          {/* Filter Harga */}
            <PriceFilter />
          
          {/* Color */}
            <ColorsFilter colors={categoryContent?.meta_data?.colors} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductListPage
