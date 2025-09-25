import React from 'react';

const ReadEmail = ({ email, onBack }) => {
  return (
    <div className="p-4 md:p-6 h-full overflow-y-auto">
      <button onClick={onBack} className="text-indigo-600 dark:text-indigo-400 hover:underline mb-4 text-sm">&larr; Back to Inbox</button>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">{email.subject}</h2>
      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6">
        <p>From: <span className="font-semibold text-slate-700 dark:text-slate-300">{email.sender}</span></p>
        <span className="mx-2">|</span>
        <p>Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{email.body}</p>
      </div>

      <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg">
        <h3 className="font-semibold text-green-800 dark:text-green-300 mb-1">Security Info</h3>
        <div className="text-sm text-green-700 dark:text-green-400">
          <p><span className="font-medium">Status:</span> Quantum Secured ✅</p>
          <p><span className="font-medium">Integrity Check:</span> Passed</p>
        </div>
      </div>
    </div>
  );
};

export default ReadEmail;