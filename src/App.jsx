import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import WhereToBuy from './components/WhereToBuy/WhereToBuy'
import AppBanner from './components/AppBanner/AppBanner'

const App = () => {
  return (
    <main className="overflow-x-hidden">
      {/* <Navbar/> */}
      <Hero/>
     <Services/>
     <WhereToBuy/>
     <AppBanner/>
    </main>
  )
}

export default App