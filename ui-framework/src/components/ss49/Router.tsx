import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Mes } from './Mes'
import { Porcher } from './Porcher'
import { BMW } from './BMW'
import { List } from './List'
import { Add } from './Add'
import { Details } from './Details'
import { Edit } from './Edit'

export const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/chotam' element={<Home/>}/>
            <Route path='/duide' element={<Mes/>}/> 
            <Route path='/daika' element={<Porcher/>}/> 
            <Route path='/bmw' element={<BMW/>}/> 
            <Route index element={<List/>}/>
            <Route path='add' element={<Add/>}/>
            <Route path='details' element={<Details/>}/>
            <Route path='edit' element={<Edit/>}/>
        </Routes>
        <Route path='pproduct-details/:id/' element={<Edit/>}/>

    </div>
  )
}
