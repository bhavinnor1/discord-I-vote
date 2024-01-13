import React from 'react'
import { Route, Routes } from 'react-router-dom'

function Private() {
  return (
    <Routes>
        <Route path='/dashboard'>Dashboard</Route>
    </Routes>
  )
}

export default Private