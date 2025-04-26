import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, Settings } from 'lucide-react';

export const FooterNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

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
        
        <div className="relative flex h-12 w-12 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-background border-4 border-background"></div>
          <Link 
            to="/" 
            className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-card"
          >
            <span className="text-xl">—</span>
          </Link>
        </div>
        
        <Link
          to="/menu"
          className={`flex flex-col items-center justify-center p-2 ${
            isActive('/menu') ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <Menu size={24} />
          <span className="mt-1 text-xs">Меню</span>
        </Link>
      </div>
    </div>
  );
};
