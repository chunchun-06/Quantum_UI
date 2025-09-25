import React, { useState, useEffect, useRef } from 'react';

// Icons defined locally to keep the component self-contained as requested.
const ChevronDownIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const RefreshIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.93 4.93a9 9 0 0112.73 0 9 9 0 010 12.73 9 9 0 01-12.73 0M12 2v4m0 12v4m10-10h-4M2 12h4"
      />
    </svg>
  );
  



const DotsVerticalIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </svg>
);


const InboxToolbar = ({ onSetFilter, onRefresh, onMarkAllAsRead, onMarkAllAsUnread }) => {
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const [moreMenuOpen, setMoreMenuOpen] = useState(false);
    const filterMenuRef = useRef(null);
    const moreMenuRef = useRef(null);

    const filterOptions = ['All', 'None', 'Read', 'Unread'];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterMenuRef.current && !filterMenuRef.current.contains(event.target)) {
                setFilterMenuOpen(false);
            }
            if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
                setMoreMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleFilterSelect = (option) => {
        onSetFilter(option.toLowerCase());
        setFilterMenuOpen(false);
    };

    const handleMarkAllReadClick = () => {
        onMarkAllAsRead();
        setMoreMenuOpen(false);
    };

    const handleMarkAllUnreadClick = () => {
        onMarkAllAsUnread();
        setMoreMenuOpen(false);
    }

    return (
        <div className="flex items-center justify-between h-14 px-4 md:px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
            <div className="flex items-center space-x-2">
                {/* Filter Dropdown */}
                <div className="relative" ref={filterMenuRef}>
                    <button
                        onClick={() => setFilterMenuOpen(!filterMenuOpen)}
                        className="flex items-center p-2 rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                    >
                        <input type="checkbox" className="w-4 h-4 mr-2 border-slate-300 dark:border-slate-600 rounded text-indigo-600 focus:ring-indigo-500" />
                        <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    {filterMenuOpen && (
                        <div className="absolute z-10 mt-2 w-36 origin-top-left rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {filterOptions.map(option => (
                                    <a
                                        key={option}
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleFilterSelect(option);
                                        }}
                                        className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
                                    >
                                        {option}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Refresh Button */}
                <button
                    onClick={onRefresh}
                    className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200">
                    <RefreshIcon className="w-5 h-5" />
                </button>

                {/* More Options Dropdown */}
                <div className="relative" ref={moreMenuRef}>
                    <button
                        onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                        className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200">
                        <DotsVerticalIcon className="w-5 h-5" />
                    </button>
                    {moreMenuOpen && (
                        <div className="absolute z-10 mt-2 w-48 origin-top-left rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); handleMarkAllReadClick(); }}
                                    className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
                                >
                                    Mark all as read
                                </a>
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); handleMarkAllUnreadClick(); }}
                                    className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
                                >
                                    Mark all as unread
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InboxToolbar;
