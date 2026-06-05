import { useState } from "react";
import CommonForm from "@/components/common/format";
import { Link, useNavigate } from "react-router-dom";
import { loginFrmControls } from "@/config";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/authSlice";

const AuthLogin = () => {
  const initialState = { email: "", password: "" };
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        navigate("/shop/home");
      }
    });
  }

  return (
    <div className="w-full max-w-sm mx-auto px-6 py-10 space-y-8">

      <div className="text-center border-b border-zinc-700 pb-6">
        <h1 className="text-4xl font-black tracking-[0.2em] text-white uppercase">
          MernShop
        </h1>
      </div>

      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-white">Welcome back</h2>
        <p className="text-sm text-zinc-400">
          Enter your credentials to access your account.
        </p>
      </div>

      <div className="space-y-5
        [&_label]:text-[11px] [&_label]:font-bold [&_label]:tracking-widest
        [&_label]:uppercase [&_label]:text-zinc-400
        [&_input]:bg-transparent [&_input]:border [&_input]:border-zinc-700
        [&_input]:text-white [&_input]:placeholder-zinc-600
        [&_input]:rounded-none [&_input]:px-4 [&_input]:py-3
        [&_input]:text-sm [&_input]:outline-none
        [&_input:focus]:border-white [&_input]:transition-colors
        [&_button]:rounded-none [&_button]:py-3.5
        [&_button]:text-[12px] [&_button]:font-bold [&_button]:tracking-widest
        [&_button]:uppercase [&_button]:transition-colors [&_button]:w-full
        [&_button]:bg-white [&_button]:text-black
        [&_button:hover]:bg-zinc-200">
        <CommonForm
          formControls={loginFrmControls}
          buttonText="Sign In"
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>

      <div className="text-right -mt-4">
        <Link
          to="/auth/forgot-password"
          className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
        >
          Forgot Password?
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-zinc-700" />
        <span className="text-xs text-zinc-600 uppercase tracking-widest">or</span>
        <div className="flex-1 h-px bg-zinc-700" />
      </div>

      <button className="w-full flex items-center justify-center gap-3 border border-zinc-700 py-3.5 text-[12px] font-bold tracking-widest uppercase text-white hover:border-white transition-colors">
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>

      <div className="text-center space-y-1 pt-2 border-t border-zinc-700">
        <p className="text-sm text-zinc-500">New to MernShop?</p>
        <Link
          to="/auth/register"
          className="text-[12px] font-bold tracking-widest uppercase text-white border-b border-white pb-0.5 hover:text-zinc-300 hover:border-zinc-300 transition-colors"
        >
          Create an Account
        </Link>
      </div>

    </div>
  );
};

export default AuthLogin;