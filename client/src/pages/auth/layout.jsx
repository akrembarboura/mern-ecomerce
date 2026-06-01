import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">

      {/* Left panel — dark branding side */}
      <div className="hidden lg:flex flex-col items-center justify-center w-[45%] bg-[#1a1a2e] px-10 gap-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center">
            
          </div>
          <span className="text-lg font-medium text-purple-50">ShopFlow</span>
        </div>

        {/* Headline */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-medium text-purple-50">Your store, your rules</h1>
          <p className="text-sm text-purple-300 leading-relaxed">
            Manage products, track orders, and grow your business.
          </p> 
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-3 w-full">
          {[
            'Secure & encrypted authentication',
            'Real-time dashboard & analytics',
            'Order & delivery management',
          ].map((text) => (
            <div key={text} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
              <span className="text-teal-400">✓</span>
              <span className="text-sm text-purple-300">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel — forms via Outlet */}
      <div className="flex flex-1 items-center justify-center bg-white px-6">
        <Outlet/>
      </div>

    </div>
  )
}

export default AuthLayout