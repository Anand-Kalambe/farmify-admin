import React from 'react';

const LoadingScreen = () => (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <div className="relative flex items-center justify-center w-20 h-20">
            <div className="absolute w-full h-full border-4 border-green-500 rounded-full animate-ping opacity-75"></div>
            <svg className="w-12 h-12 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-wider">FARMIFY</h1>
        <p className="mt-2 text-sm text-green-300">ADMIN PANEL</p>
    </div>
);

export default LoadingScreen;