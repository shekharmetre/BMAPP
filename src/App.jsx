import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import Heade from './components/Heade'
import Rpage from './pages/Rpage'

const App = () => {
  return (
    <div className=''>
      <Heade />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/Report' element={<Rpage />} />

     </Routes>
    </div>
  )
}

export default App

