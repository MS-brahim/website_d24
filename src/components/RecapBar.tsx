import React from 'react'

function RecapBar() {

  const sidebarItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'About', link: '/about' },
    { id: 3, title: 'Contact', link: '/contact' },
    // Add more sidebar items as needed
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 h-80vh">
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      {/* Sidebar links or content */}
      <ul className="space-y-2">
          {sidebarItems.map(item => (
            <li key={item.id}>
              <a href={item.link} className="block hover:bg-gray-700 py-2 px-4 rounded">{item.title}</a>
            </li>
          ))}
        </ul>
    </div>
  </aside>
  )
}

export default RecapBar