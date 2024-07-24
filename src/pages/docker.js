import React, { useState } from 'react';

const DockIcon = ({ icon, name, notifications }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative group">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src={icon} alt={name} className="w-12 h-12 rounded-lg transition-all duration-300 group-hover:scale-125" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded absolute -top-8">
          {name}
        </span>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className="hidden group-hover:block absolute top-0 right-0 p-1">
        ⋮
      </button>
      {showMenu && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 w-48">
          <div className="text-sm font-bold mb-2">{name}</div>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">Keep in Dock</button>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">Open at Login</button>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">Show in Finder</button>
          <div className="border-t my-1"></div>
          <div className="text-sm font-bold mb-1">Assign To</div>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">All Desktops</button>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">This Desktop</button>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">None</button>
          <div className="border-t my-1"></div>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">Show All Windows</button>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">Hide</button>
          <button className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded">Quit</button>
        </div>
      )}
    </div>
  );
};

const Dock = () => {
  const apps = [
    { icon: '/finder.png', name: 'Finder' },
    { icon: '/path/to/launchpad.png', name: 'Launchpad' },
    { icon: '/path/to/settings.png', name: 'System Preferences', notifications: 1 },
    { icon: '/path/to/terminal.png', name: 'Terminal' },
    { icon: '/path/to/vscode.png', name: 'Visual Studio Code' },
    { icon: '/path/to/github.png', name: 'GitHub Desktop' },
    { icon: '/chrome.svg', name: 'Google Chrome' },
    // Add more apps as needed
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md rounded-t-2xl p-2 flex space-x-2">
      {apps.map((app, index) => (
        <DockIcon key={index} {...app} />
      ))}
    </div>
  );
};

export default Dock;