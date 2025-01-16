import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tabs from './components/Tabs'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Showcase from './components/projects_showcase/Showcase'
import Contact from './components/Contact'
import '/docs/assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
