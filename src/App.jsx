import React, { useState, useEffect, useCallback } from 'react';
import { initialEmails } from './data/emails';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Inbox from './components/Inbox';
import ReadEmail from './components/ReadEmail';
import ComposeEmail from './components/ComposeEmail';
import Settings from './components/Settings';
import SecurityAlertModal from './components/SecurityAlertModal';

export default function App() {
  const [currentView, setCurrentView] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [emails, setEmails] = useState(initialEmails);
  const [modalMessage, setModalMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // Apply dark mode class to root element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Show a security alert on initial load as an example
    setTimeout(() => {
      setModalMessage('Quantum-secure session started successfully.');
    }, 1500);
  }, []);

  const handleEmailSelect = (email) => {
    setSelectedEmail(email);
    // Mark email as read
    setEmails(prevEmails => prevEmails.map(e => e.id === email.id ? { ...e, read: true } : e));
    setCurrentView('read');
  };

  const handleBackToInbox = () => {
    setSelectedEmail(null);
    setCurrentView('inbox');
  };

  const handleSend = () => {
    // Simulate sending and showing a warning modal
    setModalMessage("Warning: Possible eavesdropping detected. Secure channel re-established.");
    setCurrentView('inbox');
  }

  const toggleNotifications = () => {
    setNotificationsEnabled(prevEnabled => !prevEnabled);
  };

  const renderView = useCallback(() => {
    switch (currentView) {
      case 'inbox':
        return <Inbox emails={emails} onEmailSelect={handleEmailSelect} />;
      case 'read':
        return <ReadEmail email={selectedEmail} onBack={handleBackToInbox} />;
      case 'compose':
        return <ComposeEmail onBack={handleBackToInbox} onSend={handleSend} />;
      case 'settings':
        return <Settings
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          notificationsEnabled={notificationsEnabled}
          onToggleNotifications={toggleNotifications}
        />;
      case 'sent':
      case 'drafts':
      case 'trash':
        return <div className="p-8 text-center text-slate-500"><h2 className="text-xl font-semibold">{currentView.charAt(0).toUpperCase() + currentView.slice(1)}</h2><p>This folder is empty.</p></div>;
      default:
        return <Inbox emails={emails} onEmailSelect={handleEmailSelect} />;
    }
  }, [currentView, emails, selectedEmail, isDarkMode, notificationsEnabled]);

  return (
    <>
      <div className="h-screen w-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex overflow-hidden font-sans">
        {/* Sidebar */}
        <Sidebar
          currentView={currentView}
          setView={setCurrentView}
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {isSidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/30 z-10 md:hidden"></div>}

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0">
          <TopBar setView={setCurrentView} onMenuClick={() => setSidebarOpen(true)} />
          <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900/70">
            {renderView()}
          </div>
        </main>
      </div>

      {/* Modal */}
      <SecurityAlertModal message={modalMessage} onClose={() => setModalMessage('')} />
    </>
  );
}