import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-600 py-4">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Groth B. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer