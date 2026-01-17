import Navbar from './Navbar/Navbar'
import Home from './Navbar/Home'
import  About from './Navbar/About'
import Contact from './Navbar/Contact'
import Sign from './Navbar/Sign'
import Error from './Navbar/Error'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       

      <Routes >
        <Route path="" element={<Navbar />} >
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<Sign />} />
        <Route path="*" element={<Error />} />
        </Route>
       
      </Routes>
    </BrowserRouter>

  )
}

export default App;
