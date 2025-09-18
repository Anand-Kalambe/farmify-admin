import React from 'react';

const HomePage = () => {
    // An array to generate multiple floating "leaf" elements for the background
    const leaves = Array.from({ length: 15 });

    return (
        <>
            {/* This style block contains the CSS keyframe animations for the floating leaves
              and the fade-in effect for the text content. Using a style tag within the component
              keeps these animations scoped and self-contained.
            */}
            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
                    50% { transform: translateY(-25px) rotate(180deg); opacity: 0.3; }
                    100% { transform: translateY(0px) rotate(360deg); opacity: 0.1; }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 30px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }

                /* Utility classes to apply these animations */
                .animate-float {
                    animation: float 15s ease-in-out infinite;
                }
                .animate-fadeInUp {
                    animation: fadeInUp 1s ease-out forwards;
                }
                
                /* Staggered animation delays */
                .delay-200 { animation-delay: 200ms; }
                .delay-400 { animation-delay: 400ms; }
            `}</style>

            <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-green-900 overflow-hidden">
                {/* Floating Leaves Background Effect */}
                {leaves.map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-green-400 animate-float"
                        style={{
                            width: `${Math.random() * 80 + 20}px`,
                            height: `${Math.random() * 80 + 20}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 20 + 15}s`, // Random duration
                            animationDelay: `${Math.random() * 5}s`,      // Random start time
                        }}
                    ></div>
                ))}

                {/* Main Content with Entrance Animations */}
                <div className="text-center z-10 p-4">
                    <h1 
                        className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fadeInUp opacity-0"
                        style={{ textShadow: '0 3px 6px rgba(0,0,0,0.5)' }}
                    >
                        Welcome to Farmify
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8 animate-fadeInUp opacity-0 delay-200">
                        The future of sustainable agriculture management.
                    </p>
                    <a 
                        href="/admin"
                        className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-xl hover:bg-green-700 transition-all transform hover:scale-105 animate-fadeInUp opacity-0 delay-400"
                    >
                        Go to Admin Dashboard
                    </a>
                </div>
            </div>
        </>
    );
};

export default HomePage;
