import { NavLink } from 'react-router-dom'
import {
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Logo from '/logo.svg'

const Sidebar = ({ open, setOpen }: { open: boolean; setOpen: (val: boolean) => void }) => {
  const navItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/' },
    { name: 'Patients', icon: UserGroupIcon, path: '/patients' },
  ]

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
  className={`h-full w-64 bg-white text-secondary p-6 border-r border-muted shadow-lg z-50
  fixed top-0 left-0 transform transition-transform duration-300
  ${open ? 'translate-x-0' : '-translate-x-full'}
  md:translate-x-0 md:relative md:z-0`}

      >
        <div className="md:hidden mb-6 flex justify-end">
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="w-6 h-6 text-secondary" />
          </button>
        </div>

        <div>
          <img src={Logo} alt="Logo" width={170} className='mb-8' />
          <nav className="flex flex-col space-y-3">
            {navItems.map(({ name, icon: Icon, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-xl font-medium transition-colors duration-200 text-sm
                  ${isActive ? 'bg-primary text-secondary' : 'hover:bg-muted hover:text-secondary'}`
                }
                onClick={() => setOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          <p className="text-xs text-muted text-center mt-4">© 2025 MedHealth</p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
