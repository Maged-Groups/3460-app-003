import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginModal } from "../../lib/redux/modalsSlice";
import { login } from '../../lib/redux/userSlice';

const Login = () => {

    const dispatch = useDispatch();

    const refUsername = useRef();
    const refPassword = useRef();

    console.log('refUsername', refUsername)
    const { showLogin } = useSelector(store => store.modalsSlice)

    const handleCloseModal = () => dispatch(toggleLoginModal())

    const handleLogin = async () => {
        const username = refUsername.current.value;
        const password = refPassword.current.value;

        const credentials = {
            username, password
        }

        const body = JSON.stringify(credentials);

        const loginAPI = 'https://dummyjson.com/auth/login';

        const init = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body
        }

        const res = await fetch(loginAPI, init);
        console.log(res);

        const loggedinUser = await res.json();

        if (res.status === 200) {
            // success
            dispatch(login(loggedinUser));
            dispatch(toggleLoginModal());
        } else {
            // fail
        }

        console.log(data);

    }

    if (!showLogin) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={handleCloseModal}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                    <span className="text-2xl">&times;</span>
                </button>

                {/* Title */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-500">Sign in to your account</p>
                </div>

                {/* Form */}
                <div className="mt-6 space-y-4" >
                    {/* email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            ref={refUsername}
                            type="email"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            placeholder="name@company.com"
                        />
                    </div>

                    {/* password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            ref={refPassword}
                            type="password"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Remember me */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="font-semibold text-blue-600 hover:underline">Forgot?</a>
                    </div>

                    {/* Login Button */}
                    <button onClick={handleLogin} className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700">
                        Login
                    </button>
                </div>

                {/* Register */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    New here? <a href="#" className="font-semibold text-blue-600 hover:underline">Create account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
