import React from 'react';
import { CloseIcon, AttachmentIcon } from './icons';

const ComposeEmail = ({ onBack, onSend }) => {
  return (
    <div className="p-4 md:p-6 h-full overflow-y-auto flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">New Message</h2>
        <button onClick={onBack} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-grow flex flex-col space-y-3">
        <input type="email" placeholder="To" className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
        <div className="flex space-x-3">
          <input type="email" placeholder="CC" className="w-1/2 px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
          <input type="email" placeholder="BCC" className="w-1/2 px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
        </div>
        <input type="text" placeholder="Subject" className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
        <textarea
          placeholder="Message..."
          className="w-full flex-grow px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-none"
          rows="10"
        ></textarea>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={onSend} className="relative group px-6 py-2.5 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 overflow-hidden transition-all duration-300 ease-in-out">
            <span className="absolute left-0 top-0 h-full w-full bg-white opacity-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative">Send Securely</span>
          </button>
          <button className="p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
            <AttachmentIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="text-xs font-semibold tracking-wider text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
          Quantum Secure: ON ✅
        </div>
      </div>
    </div>
  );
};

export default ComposeEmail;