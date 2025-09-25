import React from 'react';
import { LockIcon } from './icons';

const Inbox = ({ emails, onEmailSelect }) => {
  return (
    <div className="p-4 md:p-6 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Inbox</h2>
      <ul className="divide-y divide-slate-200 dark:divide-slate-700">
        {emails.map(email => (
          <li
            key={email.id}
            onClick={() => onEmailSelect(email)}
            className={`p-4 cursor-pointer rounded-lg transition-colors duration-200 flex items-start space-x-4 ${email.read ? 'bg-white dark:bg-slate-900' : 'bg-indigo-50 dark:bg-indigo-900/20'} hover:bg-slate-100 dark:hover:bg-slate-800`}
          >
            <div className={`mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full ${email.read ? 'bg-transparent' : 'bg-indigo-500'}`}></div>
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-baseline">
                <p className={`truncate text-sm font-semibold ${email.read ? 'text-slate-700 dark:text-slate-300' : 'text-slate-900 dark:text-slate-100'}`}>
                  {email.sender}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{email.time}</p>
              </div>
              <div className="flex items-center mt-1">
                <p className={`truncate text-sm ${email.read ? 'text-slate-600 dark:text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}>
                  {email.subject}
                </p>
                <LockIcon className="ml-auto w-4 h-4 text-green-500 flex-shrink-0" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;