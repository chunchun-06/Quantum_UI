import React from 'react';
import { MenuIcon, SearchIcon, SettingsIcon } from './icons';

const TopBar = ({ setView, onMenuClick, userName = "Sundar" }) => {
  // Get the first letter of the user's name for the avatar
  const userInitial = userName ? userName.charAt(0).toUpperCase() : '?';

  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
      <button onClick={onMenuClick} className="md:hidden text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 mr-2">
        <MenuIcon className="w-6 h-6" />
      </button>
      <div className="relative flex-grow max-w-xs md:max-w-sm">
        <SearchIcon className="absolute w-5 h-5 text-slate-400 top-1/2 -translate-y-1/2 left-3" />
        <input
          type="search"
          placeholder="Search mail..."
          className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-200"
        />
      </div>
      <div className="flex items-center ml-4">
        
        <button onClick={() => setView('settings')} className="ml-4 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <SettingsIcon className="w-6 h-6" />
        </button>

        {/* --- MODIFIED PROFILE AVATAR --- */}
        <button
          aria-label="User Profile"
          className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 rounded-full"
        >
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600">
            <span className="text-sm font-semibold text-white">{userInitial}</span>
          </div>
        </button>
        {/* --- END OF MODIFIED SECTION --- */}

      </div>
    </header>
  );
};

export default TopBar;