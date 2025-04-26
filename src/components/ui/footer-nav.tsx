import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Settings } from 'lucide-react';

export const FooterNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => location.pathname === path;

  const handleSettingsClick = () => {
    navigate('/menu', { state: { activeTab: 'settings' } });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background px-2 py-2">
      <div className="flex items-center justify-around">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center p-2 ${
            isActive('/') ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <Home size={24} />
          <span className="mt-1 text-xs">Главная</span>
        </Link>
        
        <div
          onClick={handleSettingsClick}
          className="relative flex h-12 w-12 items-center justify-center cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-background border-4 border-background"></div>
          <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-card">
            <Settings size={20} className="text-primary" />
          </div>
        </div>
        
        <Link
          to="/menu"
          className={`flex flex-col items-center justify-center p-2 ${
            isActive('/menu') ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span className="mt-1 text-xs">Меню</span>
        </Link>
      </div>
    </div>
  );
};
