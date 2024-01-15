import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'

function Public() {
  const {name, avatar} = useParams();
  console.log("paramas", name, avatar);
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
    </Routes>
  )
}

export default Public