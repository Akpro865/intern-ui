import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './comps/Home'
import SinglePost from './comps/SinglePost'
import Navbar from './comps/Navbar'

function App() {
  return (
    <Router>
      <Navbar />      
      <div>      
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/post/:id' element={<SinglePost />} />
      </Routes>     
      </div>      
    </Router>
  )
}

export default App
