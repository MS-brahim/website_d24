import React from 'react'
import HomeView from '../views/HomeView'


function MainContent() {
  return (
    <main className="flex-grow p-8">
    <div className="container mx-auto">
      {/* <h2 className="text-3xl font-bold mb-4">Main Content</h2> */}
      {/* Add your main content here */}
      <HomeView/>
    </div>
  </main>
  )
}

export default MainContent