import React from 'react'
import { Outlet } from 'react-router-dom'

export const Body = () => {
  return (
      <div>
          <Outlet/>
    </div>
  )
}
