import { Outlet } from "react-router-dom"
import AdminHeader from "./header"
import AdminSidebar from "./sidebar"

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
         {/* admin sidebar */}
        <AdminSidebar/>
        <div className='flex flex-1 flex-col'>
            <h2 className='text-2xl font-bold mb-4'>Admin Panel</h2>
            {/* admin header */}
            <AdminHeader/>
            <main className='flex-1 bg-gray-100 p-4 md:p-6'>
                <Outlet />
            </main>
        </div>
    </div>      

  )
}

export default AdminLayout
