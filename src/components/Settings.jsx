import React from 'react';

const Settings = ({ isDarkMode, onToggleDarkMode, notificationsEnabled, onToggleNotifications }) => {
  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Settings</h2>

      <div className="space-y-8">
        {/* General Preferences */}
        <section>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">General</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="darkModeToggle" className="text-slate-600 dark:text-slate-400">Dark Mode</label>
              <button
                id="darkModeToggle"
                onClick={onToggleDarkMode}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 ${isDarkMode ? 'bg-black-600' : 'bg-slate-300 dark:bg-slate-600'}`}
              >
                <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="notificationsToggle" className="text-slate-600 dark:text-slate-400">Enable Notifications</label>
              <button
                id="notificationsToggle"
                onClick={onToggleNotifications}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 ${notificationsEnabled ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-600'}`}
              >
                <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${notificationsEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </section>

        {/* Security Status */}
        <section>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">Security</h3>
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <div className="flex items-center text-green-600 dark:text-green-400">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <p className="font-semibold">Secure Channel Active</p>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Last key refresh: 5 minutes ago</p>
          </div>
        </section>

        {/* About Section */}
        <section>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">About QuMail</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            QuMail integrates Quantum Key Distribution (QKD) with existing email services to provide unparalleled security. By leveraging the principles of quantum mechanics, we ensure that your communications are protected against current and future threats, including those from quantum computers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Settings;