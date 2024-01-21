import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

function Private() {
  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
  )
}

export default Private