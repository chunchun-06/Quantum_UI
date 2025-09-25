import React from 'react';

const SecurityAlertModal = ({ message, onClose }) => {
  if (!message) return null;

  const isWarning = message.toLowerCase().startsWith('warning');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl w-full max-w-md p-6 transform transition-all animate-fade-in-up">
        <div className={`flex items-center mb-4 ${isWarning ? 'text-yellow-500' : 'text-green-500'}`}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: isWarning ? '#fef3c7' : '#d1fae5' }}>
            {isWarning ?
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              :
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            }
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{isWarning ? 'Security Warning' : 'Success'}</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default SecurityAlertModal;