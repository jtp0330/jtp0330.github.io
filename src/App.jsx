import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tabs from './assets/components/Tabs'
import Tab from 'react - bootstrap / Tab'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/*Tabs Navbar*/}
      <Tabs />
      {/*Content for Navbar*/}
      <Tab.Content>
        <Tab.Pane eventKey="home"><Home /></Tab.Pane>
        <Tab.Pane eventKey="about"><About /></Tab.Pane>
        <Tab.Pane eventKey="projects"><Showcase /></Tab.Pane>
        <Tab.Pane eventKey="contact"><Contact /></Tab.Pane>
      </Tab.Content>
    </div>
  )
}

export default App
