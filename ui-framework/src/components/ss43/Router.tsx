import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Menu } from './Menu'
import { Profile } from './Profile'
import { Chart } from './Chart'
export const Router = () => {
  return (
    <div>
       <Routes>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/chart' element={<Chart/>}/>
        </Routes> 
    </div>
  )
}
