import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
   <div className="flex h-screen overflow-hidden">
  <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
  <div className="flex-1 flex flex-col relative z-10">
    <Header setSidebarOpen={setSidebarOpen} />
    <main className="flex-1 p-6 overflow-y-auto bg-background">
      <Outlet />
    </main>
  </div>
</div>

  )
}

export default DashboardLayout