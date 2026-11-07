import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Main from './components/main.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen flex flex-col bg-[#3b82f6] dark:bg-[#09090b] text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-pink-400 selection:text-slate-900">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main />
      <Footer />
    </div>
  )
}

export default App