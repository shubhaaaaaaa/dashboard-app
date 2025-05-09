import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-800 text-white p-4 space-y-4">
      <h1 className="text-xl font-bold">Hospital</h1>
      <nav className="flex flex-col gap-2">
        <NavLink to="/" className="hover:underline">Dashboard</NavLink>
        <NavLink to="/patients" className="hover:underline">Patients</NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
