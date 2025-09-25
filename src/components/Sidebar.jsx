import React from 'react';
import QumailLogo from '../assets/Qumail.png'; // Adjust the path if necessary
import { InboxIcon, SentIcon, DraftsIcon, TrashIcon, CloseIcon } from './icons';

const Sidebar = ({ currentView, setView, isSidebarOpen, setSidebarOpen }) => {
  const navItems = [
    { id: 'inbox', icon: InboxIcon, label: 'Inbox' },
    { id: 'sent', icon: SentIcon, label: 'Sent' },
    { id: 'drafts', icon: DraftsIcon, label: 'Drafts' },
    { id: 'trash', icon: TrashIcon, label: 'Trash' },
  ];

  return (
    <aside
      className={`absolute md:relative z-20 md:z-auto bg-slate-100 dark:bg-slate-800/50 md:dark:bg-slate-800 h-full w-64 md:w-56 flex-shrink-0 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center">
          <img src={QumailLogo} alt="QuMail logo" className="h-19 w-auto" />
          {/* Added -ml-1.5 to reduce gap and make it look like one word */}
          <h1 className="inline-block text-2xl font-bold text-indigo-600 dark:text-indigo-400 -ml-5.5">
            uMail
          </h1>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>

      {/* --- Compose Button --- */}
      <div className="p-4">
        <button
          onClick={() => {
            setView('compose'); // Switches to Compose component
            setSidebarOpen(false);
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          + Compose
        </button>
      </div>

      {/* --- Navigation Items --- */}
      <nav className="p-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setView(item.id);
                  setSidebarOpen(false);
                }}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                  currentView === item.id
                    ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
