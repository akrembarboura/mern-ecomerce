import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
   <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
  <Outlet />
</div>
  )
}

export default AuthLayout