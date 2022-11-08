import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Data from './data'
export default function App() {
  const mappedData = Data.map(item=> {
    return <Hero 
      key={item.id}
      item={item}
      />
  })
  return (
    <div>
      <Navbar />
      <section>
        {mappedData}
      </section>
    </div>
  )
}