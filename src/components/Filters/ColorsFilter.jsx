import React, { useState, useCallback } from 'react'

export const colorSelector = {
  "Purple": "#8434E1",
  "Black": "#252525",
  "White": "#FFFFFF",
  "Gray": "#808080",
  "Blue": "#0000FF",
  "Red": "#FF0000",
  "Orange": "#FFA500",
  "Navy": "#000080",
  "Grey": "#808080",
  "Yellow": "#FFFF00",
  "Pink": "#FFC0CB",
  "Green": "#008000"
}

const ColorsFilter = ({ colors }) => {
  const [appliedColors, setAppliedColors] = useState([]);
  const onClickDiv = useCallback((item) => {
    if(appliedColors.includes(item)) {
      setAppliedColors(appliedColors.filter(color => color !== item));
    } else {
      setAppliedColors([...appliedColors, item]);
    }
  }, [appliedColors, setAppliedColors]);
  return (
    <div className='flex flex-col mb-4'>
      <p className='text-[16px] text-black mt-5 mb-5'>Colors</p>
      <div className='flex flex-wrap px-2'>
        {colors?.map((item, index) => (
          <div key={index} className='flex flex-col items-center mr-4 mb-4'>
            <div
              className='w-8 h-8 rounded-xl mr-4 cursor-pointer hover:outline-2 hover:scale-105'
              onClick={() => onClickDiv(item)}
              style={{ backgroundColor: colorSelector[item] }}></div>
            <p className='text-[12px] mt-1' style={{ color: appliedColors.includes(item) ? 'black' : '' }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorsFilter