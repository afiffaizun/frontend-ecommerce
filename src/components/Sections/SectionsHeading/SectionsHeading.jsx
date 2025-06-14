import React from 'react'
import PropTypes from 'prop-types'

const SectionsHeading = ({title}) => {
  return (
    <div className='flex flex-wrap px-10 my-5 items-center gap-2'>
        <div className='rounded border-1 bg-black w-2 h-10'>
          
        </div>
        <p className='text-3xl'>{title}</p>
    </div>
  )
}

SectionsHeading.defaultProps = {
  // bisa diisi default title jika mau
}

SectionsHeading.propTypes = {
    title: PropTypes.string
}

export default SectionsHeading