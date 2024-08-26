import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tabs from './components/Tabs'
import '/docs/assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="app">
      {/*Tabs Navbar*/}
      <Tabs />
      {/*Content for Navbar*/}
    </div>

    // <BrowserRouter>
    //<Routes>
    //<Route>
    //<Route>
    //<Route>
    //<Route>
    //</Routes>
    // </BrowserRouter>
  )
}

export default App
