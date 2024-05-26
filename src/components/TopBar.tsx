import React from 'react'

function TopBar() {
  return (
    <header className="bg-gray-800 text-white py-2">
      <div className="px-4 mx-auto">
        <div>
          <a href="#">
            <img src="./darkLogo.png" alt="logo" width="150" />
          </a>
        </div>
        {/* <h1 className="text-2xl font-bold">Groth B</h1>
      <span>Le prix de votre site web en 2 minutes</span> */}
      </div>
    </header>
  )
}

export default TopBar