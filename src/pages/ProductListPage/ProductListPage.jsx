import React from 'react'
import FilterIcon from '../../components/common/FilterIcon'

const ProductListPage = ({categoryType}) => {
  return (
    <div>
      <div className='flex flex-col'>
        <div className='w-[30%] p-[20px] border rounded-lg m-[20px]'>
          {/* Filter Section */}
          <div className='flex justify-between'>
            <p className='text-lg'>Filter</p>
            <FilterIcon />
          </div>

          <div>
            <p className='text-[16px] text-black mt-5'>Categori</p>

          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default ProductListPage
