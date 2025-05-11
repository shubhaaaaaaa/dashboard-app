import { useState, useRef, useEffect } from 'react';
import {
  Bars3Icon,
  BellSlashIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

type HeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setSidebarOpen }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBellMuted, setIsBellMuted] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white px-6 py-4 border-b border-muted shadow-sm flex items-center justify-between z-10">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="md:hidden text-gray-700"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Welcome, User</h1>
      </div>

      <div className="flex items-center gap-4 relative" ref={menuRef}>
        <div onClick={() => setIsBellMuted((prev) => !prev)} className="cursor-pointer">
          {isBellMuted ? (
            <BellSlashIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <BellIcon className="h-6 w-6 text-gray-700" />
          )}
        </div>

        <UserCircleIcon
          className="h-6 w-6 text-gray-700 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {isMenuOpen && (
          <div className="absolute top-10 right-0 bg-white border border-gray-200 shadow-md rounded-md w-40">
            <ul className="text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
