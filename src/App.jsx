import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './component/Blogs/Blogs'

function App() {


  return (
    <div className="App">
      <h1 className='text-3xl font-bold text-center text-yellow-600'>Hello World</h1>
      <Blogs></Blogs>

    </div>
  )
}

export default App
