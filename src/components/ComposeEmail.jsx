import React, { useState } from "react";
import { CloseIcon, AttachmentIcon } from "./icons";

const ComposeEmail = ({ onBack, onSend }) => {
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-lg bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          New Message
        </h2>
        <button
          onClick={onBack}
          className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Fields */}
      <div className="flex flex-col text-sm">
        <div className="flex items-center border-b border-slate-200 dark:border-slate-700">
          <input
            type="email"
            placeholder="To"
            className="flex-grow px-4 py-2 focus:outline-none dark:bg-slate-900 dark:text-slate-100"
          />
          <button
            onClick={() => setShowCc(!showCc)}
            className="px-2 text-xs text-blue-600 hover:underline"
          >
            Cc
          </button>
          <button
            onClick={() => setShowBcc(!showBcc)}
            className="px-2 text-xs text-blue-600 hover:underline"
          >
            Bcc
          </button>
        </div>
        {showCc && (
          <div className="border-b border-slate-200 dark:border-slate-700">
            <input
              type="email"
              placeholder="Cc"
              className="w-full px-4 py-2 focus:outline-none dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
        )}
        {showBcc && (
          <div className="border-b border-slate-200 dark:border-slate-700">
            <input
              type="email"
              placeholder="Bcc"
              className="w-full px-4 py-2 focus:outline-none dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
        )}
        <div className="border-b border-slate-200 dark:border-slate-700">
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 focus:outline-none dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
        <div className="flex-grow">
          <textarea
            placeholder="Message..."
            className="w-full h-48 px-4 py-2 focus:outline-none dark:bg-slate-900 dark:text-slate-100 resize-none"
          ></textarea>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-3">
          <button
            onClick={onSend}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-md shadow"
          >
            Send
          </button>
          <button className="p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <AttachmentIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="text-xs font-medium text-green-600 dark:text-green-400">
          Quantum Secure: ON ✅
        </div>
      </div>
    </div>
  );
};

export default ComposeEmail;
