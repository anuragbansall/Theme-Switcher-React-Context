import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context/ThemeContextProvider'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {

  const {theme, toggleTheme} = useContext(ThemeContext)

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(theme)
  }, [theme])

  return (
    <div className="flex flex-wrap min-h-screen items-center dark:bg-slate-950 bg-white">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card />
          </div>
      </div>
    </div>

  )
}

export default App