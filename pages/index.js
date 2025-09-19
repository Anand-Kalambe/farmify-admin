import React, { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes float {
                0% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(10deg); }
                100% { transform: translateY(0px) rotate(0deg); }
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
            .animate-slideUp-delay-1 { animation: slideUp 1s ease-out 0.5s forwards; opacity: 0; }
            .animate-slideUp-delay-2 { animation: slideUp 1s ease-out 1s forwards; opacity: 0; }

            .floating-leaf {
                position: absolute;
                width: 50px;
                height: 50px;
                background-color: rgba(134, 239, 172, 0.1); /* Lighter green with opacity */
                border-radius: 50% 10%;
                animation: float 6s ease-in-out infinite;
                filter: blur(5px);
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="floating-leaf" style={{ top: '10%', left: '15%', animationDuration: '7s' }}></div>
                <div className="floating-leaf" style={{ top: '20%', left: '80%', width: '80px', height: '80px', animationDuration: '8s', animationDelay: '1s' }}></div>
                <div className="floating-leaf" style={{ top: '70%', left: '10%', width: '40px', height: '40px', animationDuration: '5s', animationDelay: '2s' }}></div>
                <div className="floating-leaf" style={{ top: '80%', left: '60%', width: '100px', height: '100px', animationDuration: '9s' }}></div>
                <div className="floating-leaf" style={{ top: '50%', left: '40%', animationDuration: '6s', animationDelay: '3s' }}></div>
            </div>

            <div className="text-center z-10">
                <h1 className="text-5xl md:text-6xl font-bold text-green-300 mb-4 animate-fadeIn">
                    Welcome to Farmify
                </h1>
                <p className="text-lg text-gray-300 mb-8 animate-slideUp-delay-1">
                    The future of sustainable agriculture management.
                </p>
                <a 
                    href="/login"
                    className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 animate-slideUp-delay-2"
                >
                    Go to Admin Dashboard
                </a>
            </div>
        </div>
    );
};

export default HomePage;
