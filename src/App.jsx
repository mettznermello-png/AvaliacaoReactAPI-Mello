import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sla from './pages/Sla'
import Futurama from './pages/Futurama'
import About from './pages/About'
import Home from './pages/Home'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Card />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/api' element={<Futurama />} />
        <Route path='/seila' element={<Sla />} />
      </Routes>

    </>
  )
}

export default App