import React, { useState, useEffect } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // This is for the animated background effect, similar to the home page
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
                100% { transform: translateY(0px); }
            }
             @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .floating-shape {
                position: absolute;
                background-color: rgba(134, 239, 172, 0.08);
                border-radius: 50%;
                animation: float 8s ease-in-out infinite;
                filter: blur(10px);
            }
            .form-container {
                animation: fadeIn 1s ease-out forwards;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // --- This is a simulation ---
        // In a real app, you would add authentication logic here.
        console.log('Logging in with:', email, password);
        
        // Redirect to the admin dashboard on successful login
        window.location.href = '/admin';
    };

    return (
        <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden">
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 z-0">
                <div className="floating-shape" style={{ top: '15%', left: '20%', width: '150px', height: '150px', animationDuration: '9s' }}></div>
                <div className="floating-shape" style={{ top: '65%', left: '75%', width: '200px', height: '200px', animationDuration: '12s', animationDelay: '2s' }}></div>
                <div className="floating-shape" style={{ top: '50%', left: '5%', width: '100px', height: '100px', animationDuration: '10s' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-md p-8 space-y-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-2xl backdrop-blur-sm form-container">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-green-300">Admin Login</h1>
                    <p className="text-gray-400">Welcome back to Farmify</p>
                </div>
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="text-sm font-bold text-gray-300 tracking-widest">EMAIL</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 mt-2 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="admin@farmify.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-bold text-gray-300 tracking-widest">PASSWORD</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mt-2 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;