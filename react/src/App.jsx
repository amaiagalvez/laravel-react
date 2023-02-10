import { useState } from 'react'
import './App.css'
import { BeakerIcon } from '@heroicons/react/24/solid'

function App() {

  return (
    <div className="bg-purple-400 text-3xl text-white font-bold underline p-5">
      <BeakerIcon className="h-12 w-12 text-white" />
      <span className="h-24 w-24">App.jsx</span>
    </div>
  )
}

export default App
