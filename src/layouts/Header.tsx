import { Bars3Icon } from '@heroicons/react/24/outline'

type HeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setSidebarOpen }: HeaderProps) => {
  return (
    <header className="w-full bg-white px-6 py-4 border-b border-muted shadow-sm flex items-center justify-between z-10">
      <button
  onClick={() => setSidebarOpen((prev) => !prev)}
  className="md:hidden text-gray-700"
>
  <Bars3Icon className="h-6 w-6" />
</button>

      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
    </header>
  );
};


export default Header;
