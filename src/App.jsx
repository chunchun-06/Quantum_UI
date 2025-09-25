import React, { useState, useEffect, useCallback } from 'react';
import { initialEmails } from './data/emails';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import InboxToolbar from './components/InboxToolbar'; // Import the new component
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
  const [filter, setFilter] = useState('all'); // Add filter state

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    setTimeout(() => {
      setModalMessage('Quantum-secure session started successfully.');
    }, 1500);
  }, []);

  const handleEmailSelect = (email) => {
    setSelectedEmail(email);
    setEmails(prevEmails => prevEmails.map(e => e.id === email.id ? { ...e, read: true } : e));
    setCurrentView('read');
  };

  const handleBackToInbox = () => {
    setSelectedEmail(null);
    setCurrentView('inbox');
  };

  const handleSend = () => {
    setModalMessage("Warning: Possible eavesdropping detected. Secure channel re-established.");
    setCurrentView('inbox');
  }

  const toggleNotifications = () => {
    setNotificationsEnabled(prevEnabled => !prevEnabled);
  };
  
  // Handlers for the new toolbar
  const handleSetFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const handleMarkAll = (readStatus) => {
    setEmails(currentEmails => currentEmails.map(e => ({ ...e, read: readStatus })));
  };

  const handleRefresh = () => {
    console.log("Refreshing emails...");
    // Simple refresh simulation by re-setting state
    setEmails(prevEmails => [...prevEmails]);
     setModalMessage('Inbox has been refreshed.');
  };

  const getFilteredEmails = () => {
    switch (filter) {
      case 'read':
        return emails.filter(e => e.read);
      case 'unread':
        return emails.filter(e => !e.read);
      case 'none':
        return [];
      case 'all':
      default:
        return emails;
    }
  };

  const renderView = useCallback(() => {
    const filteredEmails = getFilteredEmails();
    
    switch (currentView) {
      case 'inbox':
        return <Inbox emails={filteredEmails} onEmailSelect={handleEmailSelect} />;
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
        return <Inbox emails={filteredEmails} onEmailSelect={handleEmailSelect} />;
    }
  }, [currentView, emails, selectedEmail, isDarkMode, notificationsEnabled, filter]);

  return (
    <>
      <div className="h-screen w-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex overflow-hidden font-sans">
        <Sidebar
          currentView={currentView}
          setView={setCurrentView}
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {isSidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/30 z-10 md:hidden"></div>}

        <main className="flex-1 flex flex-col min-w-0">
          <TopBar setView={setCurrentView} onMenuClick={() => setSidebarOpen(true)} />
          
          {/* Conditionally render the new toolbar for the inbox view */}
          {currentView === 'inbox' && (
            <InboxToolbar 
              onSetFilter={handleSetFilter}
              onRefresh={handleRefresh}
              onMarkAllAsRead={() => handleMarkAll(true)}
              onMarkAllAsUnread={() => handleMarkAll(false)}
            />
          )}

          <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900/70">
            {renderView()}
          </div>
        </main>
      </div>

      <SecurityAlertModal message={modalMessage} onClose={() => setModalMessage('')} />
    </>
  );
}
