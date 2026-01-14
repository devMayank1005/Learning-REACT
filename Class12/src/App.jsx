import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'
import AllCourses from './pages/AllCourses'
import Layout from './pages/Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='courses' element={<Courses />}>
          <Route index element={<AllCourses />} />
          <Route path='kodr' element={<Kodr />} />
          <Route path='kodex' element={<Kodex />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
