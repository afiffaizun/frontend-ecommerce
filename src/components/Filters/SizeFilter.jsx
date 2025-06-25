import React, { useState, useCallback } from 'react'

const SizeFilter = ({sizes}) => {

  const [appliedSize, setAppliedSize] = useState([]);
  
  const onClickDiv = useCallback((item) => {
    if(appliedSize.includes(item)) {
      setAppliedSize(appliedSize.filter(size => size !== item));
    } else {
      setAppliedSize([...appliedSize, item]);
    }
  }, [appliedSize, setAppliedSize]);

  return (
    <div className='flex flex-col mb-4'>
        <p className='text-[16px] text-black mt-5 mb-5'>Size</p>
          <div className='flex flex-wrap px-2'>
            {sizes?.map((item, index) => (
              <div key={index} className='flex flex-col items-center mr-4 mb-4'>
                <div
                  className='w-8 h-8 rounded-xl mr-4 cursor-pointer'
                  style={appliedSize.includes(item) ? { background: 'black', color: 'white' } : {}}
                  onClick={() => onClickDiv(item)}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default SizeFilter
