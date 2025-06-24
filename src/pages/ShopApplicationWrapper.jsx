import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
const ShopApplicationWrapper = () => {
  return (
    <div>
    <Navigation />
    <Outlet />
      
    </div>
  )
}

export default ShopApplicationWrapper
