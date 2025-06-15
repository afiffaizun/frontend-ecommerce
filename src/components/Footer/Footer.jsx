import React from 'react'
import FbIcon from '../common/FbIcon.jsx'
import InstaIcon from '../common/InstalIcon.jsx'


const Footer = ({content}) => {
  return (
    <div className='bg-black text-white py-8'>
        <div className='flex justify-around'>
            {content?.footer && content?.footer?.map((item,index)=>{
                return (
                    <div className='flex flex-col'>
                    <p className='text-[20px] pb-[10px]'>{item?.title}</p>
                    {item?.list && item?.list?.map((listItem,index)=><a className='flex flex-col text-[16px] py-2'
                     href={listItem?.path}>{listItem?.label}</a>)}
                     {item?.description && <p>{item?.description}</p>}
                    </div>
                )
            })}
        </div>
        <div className='flex gap-2 items-center justify-center py-4'>
          <a href='/fb'><FbIcon /></a>
          <a href='/insta'><InstaIcon /></a>  
        </div>
        <p className='text-[20px] text-white text-center content-center'>{content?.copyright}</p>

    </div>
  )
}


export default Footer