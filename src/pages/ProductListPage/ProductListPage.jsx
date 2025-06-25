import React, { useMemo } from 'react'
import FilterIcon from '../../components/common/FilterIcon'
import content from '../../data/content.json'
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';
import SizeFilter from '../../components/Filters/SizeFilter';

const categories = content?.categories;
const ProductListPage = ({categoryType}) => {
  
  const categoryContent = useMemo(() =>{
    return categories?.find((category)=> category.code === categoryType);
  },[categoryType]) 

  const productListItems =useMemo(() => {
    return content?.products?.filter((product)=> product?.category_id === categoryContent?.id);
  }, [categoryContent])
  
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
            <hr></hr>
          
          {/* Color */}
            <ColorsFilter colors={categoryContent?.meta_data?.colors} />
            <hr></hr>

          {/* Size */}
            <SizeFilter sizes={categoryContent?.meta_data?.sizes} />
          </div>
        </div>

        <p className='text-black text-lg'>{categoryContent?.description}</p>
          {/* Product */}
      </div>
    </div>
  )
}

export default ProductListPage
