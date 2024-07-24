import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const MenuItem = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-xs" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:bg-black px-3 py-1 rounded"
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <Link key={index} href={item.href} className="block px-4 py-2 text-xs text-gray-700 hover:bg-blue-400 hover:text-white" role="menuitem">
                  {item.label}
                  {item.shortcut && (
                    <span className="float-right text-xs text-gray-500">{item.shortcut}</span>
                  )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const appleMenuItems = [
    { label: 'About This Mac', href: '#', shortcut: '' },
    { label: 'System Settings...', href: '#', shortcut: '' },
    { label: 'App Store...', href: '#', shortcut: '' },
    { label: 'Recent Items', href: '#', shortcut: '' },
    { label: 'Force Quit...', href: '#', shortcut: '⌥' },
    { label: 'Sleep', href: '#', shortcut: '' },
    { label: 'Restart...', href: '#', shortcut: '' },
    { label: 'Shutdown...', href: '#', shortcut: '' },
    { label: 'Lock Screen', href: '#', shortcut: '^⌘Q' },
    { label: 'Log Out', href: '#', shortcut: '⇧⌘Q' },
  ];

  const chromeMenuItems = [
    { label: 'About Google Chrome', href: '#', shortcut: '' },
    { label: 'Settings...', href: '#', shortcut: '' },
    { label: 'Delete Browsing Data...', href: '#', shortcut: '' },
    { label: 'Import Bookmarks and Settings...', href: '#', shortcut: '' },
    { label: 'Services', href: '#', shortcut: '⌥' },
    { label: 'Hide Google Chrome', href: '#', shortcut: '' },
    { label: 'Hide Others', href: '#', shortcut: '' },
    { label: 'Warn Before Quitting (⌘Q)', href: '#', shortcut: '' },
    { label: 'Quit Google Chrome', href: '#', shortcut: '' },
  ];

  const fileMenuItems = [
    { label: 'New Tab', href: '#', shortcut: '⌘T' },
    { label: 'New Window', href: '#', shortcut: '⌘N' },
    { label: 'New Incognito Window', href: '#', shortcut: '⇧⌘N' },
    { label: 'Reopen Closed Tab', href: '#', shortcut: '⇧⌘T' },
    { label: 'Open File...', href: '#', shortcut: '⌘O' },
    { label: 'Open Location...', href: '#', shortcut: '⌘L' },
    { label: 'Close Window', href: '#', shortcut: '⇧⌘W' },
    { label: 'Close Tab', href: '#', shortcut: '⌘W' },
    { label: 'Save Page As...', href: '#', shortcut: '⌘S' },
    { label: 'Share', href: '#' },
    { label: 'Print...', href: '#', shortcut: '⌘P' },
  ];

  const editMenuItems = [
    { label: 'Undo', href: '#', shortcut: '⌘Z' },
    { label: 'Redo', href: '#', shortcut: '⇧⌘Z' },
    { label: 'Cut', href: '#', shortcut: '⌘X' },
    { label: 'Copy', href: '#', shortcut: '⌘C' },
    { label: 'Paste', href: '#', shortcut: '⌘V' },
    { label: 'Paste and Match Style', href: '#', shortcut: '⇧⌘V' },
    { label: 'Delete', href: '#', shortcut: '' },
    { label: 'Select All', href: '#', shortcut: '⌘A' },
    { label: 'Find', href: '#', shortcut: '' },
    { label: 'Spelling and Grammar', href: '#', shortcut: '' },
    { label: 'Substitutions', href: '#', shortcut: '' },
    { label: 'Transformations', href: '#', shortcut: '' },
    { label: 'Speech', href: '#', shortcut: '' },
    { label: 'Autofill', href: '#', shortcut: '⌘S' },
    { label: 'Start Dictation', href: '#', shortcut: '' },
    { label: 'Emoji and Symbols', href: '#', shortcut: '' },
  ];

  const viewMenuItems = [
    { label: 'Always Show Bookmarks Bar', href: '#', shortcut: '⌘B' },
    { label: 'Always Show Toolbar in Full Screen', href: '#', shortcut: '⇧⌘F' },
    { label: 'Always Show Full URLs', href: '#', shortcut: '' },
    { label: 'Stop', href: '#', shortcut: '⌘.' },
    { label: 'Force Reload This Page', href: '#', shortcut: '⌘⇧R' },
    { label: 'Enter Full Screen', href: '#', shortcut: '⇧⌘F' },
    { label: 'Actual Size', href: '#', shortcut: '⌘0' },
    { label: 'Zoom In', href: '#', shortcut: '⌘+' },
    { label: 'Zoom Out', href: '#', shortcut: '⌘-' },
    { label: 'Cast...', href: '#', shortcut: '' },
    { label: 'Developer', href: '#', shortcut: '' }
];

const historyMenuItems = [
  { label: 'Home', href: '#', shortcut: '' },
  { label: 'Back', href: '#', shortcut: '' },
  { label: 'Forward', href: '#', shortcut: '' },
];

const bookmarksMenuItems = [
  { label: 'Bookmark Manager', href: '#', shortcut: '⌥⌘B' },
  { label: 'Bookmark This Tab...', href: '#', shortcut: '⌘D' },
  { label: 'Bookmark All Tabs...', href: '#', shortcut: '⇧⌘D' },
  
];

const profilesMenuItems = [
  { label: 'Edit...', href: '#', shortcut: '⇧⌘F' },
  { label: 'Add Profile...', href: '#', shortcut: '' },
];

const tabMenuItems = [
  { label: 'New Tab to the Right', href: '#', shortcut: '' },
  { label: 'Select Next Tab', href: '#', shortcut: '' },
  { label: 'Select Previous Tab', href: '#', shortcut: '' },
  { label: 'Duplicate Tab', href: '#', shortcut: '' },
  { label: 'Mute Site', href: '#', shortcut: '' },
  { label: 'Pin Tab', href: '#', shortcut: '' },
  { label: 'Group Tab', href: '#', shortcut: '' },
  { label: 'Close Other Tabs', href: '#', shortcut: '' },
  { label: 'Close Tabs to the Right', href: '#', shortcut: '' },
  { label: 'Move Tab to New Window', href: '#', shortcut: '' },
  { label: 'Search Tabs...', href: '#', shortcut: '' },
];

const windowMenuItems = [
  { label: 'Minimize', href: '#', shortcut: '⌘M' },
  { label: 'Zoom', href: '#', shortcut: '' },
  { label: 'Tile Window to Left of Screen', href: '#', shortcut: '' },
  { label: 'Tile Window to Right of Screen', href: '#', shortcut: '' },
  { label: 'Replace Tiled Window', href: '#', shortcut: '' },
  { label: 'Remove Window from Set', href: '#', shortcut: '' },
  { label: 'Show As Tab', href: '#', shortcut: '' },
  { label: 'Name Window...', href: '#', shortcut: '' },
  { label: 'Downloads', href: '#', shortcut: '⌘J' },
  { label: 'Extensions', href: '#', shortcut: '' },
  { label: 'Task Manager', href: '#', shortcut: '' },
  { label: 'Bring All to Front', href: '#', shortcut: '' }
];

const helpMenuItems = [
  { label: 'Search', href: '#', shortcut: '' },
  { label: 'Report An Issue', href: '#', shortcut: '⇧⌘F' },
  { label: 'Google Chrome Help', href: '#', shortcut: '' },
];

  // Add more menu items for other dropdowns as needed

  return (
    <div>
    <header className="bg-gray-800 text-white p-2 flex items-center justify-between">
      <div className="flex items-center">
        <nav>
          <ul className="flex" style={{ listStyleType: 'none', padding: 0 }}>
            <li><MenuItem label="" items={appleMenuItems} /></li>
            <li><MenuItem label="Chrome" items={chromeMenuItems}/></li>
            <li><MenuItem label="File" items={fileMenuItems} /></li>
            <li><MenuItem label="Edit" items={editMenuItems} /></li>
            <li><MenuItem label="View" items={viewMenuItems} /></li>
            <li><MenuItem label="History" items={historyMenuItems} /></li>
            <li><MenuItem label="Bookmarks" items={bookmarksMenuItems} /></li>
            <li><MenuItem label="Profiles" items={profilesMenuItems} /></li>
            <li><MenuItem label="Tab" items={tabMenuItems} /></li>
            <li><MenuItem label="Window" items={windowMenuItems} /></li>
            <li><MenuItem label="Help" items={helpMenuItems} /></li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-2 text-xs">

      <span>{currentTime.toLocaleTimeString([], {year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second:'2-digit'})}</span>

      </div>
    </header>
    <p>KOALA KOALA KOAL <br/> KOALA</p>
    </div>
  );
};

export default Header;