import React, { useState, useEffect } from 'react';

// --- Assuming components are in these paths ---
import Sidebar from '../components/Sidebar';
import DashboardHome from '../components/DashboardHome';
import CreateMission from '../components/CreateMission';
import VerifyFarmers from '../components/VerifyFarmers';
import Leaderboard from '../components/Leaderboard';
import GiveRewards from '../components/GiveRewards';
import SchemesAndLoans from '../components/SchemesAndLoans';
import CreateBadges from '../components/CreateBadges';
import LoadingScreen from '../components/LoadingScreen';

// --- SVG Icon for the Menu Button ---
const HamburgerIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);


const AdminPage = () => {
    const [activeView, setActiveView] = useState('dashboard');
    const [loading, setLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const renderActiveView = () => {
        switch (activeView) {
            case 'dashboard': return <DashboardHome />;
            case 'missions': return <CreateMission />;
            case 'farmers': return <VerifyFarmers />;
            case 'leaderboard': return <Leaderboard />;
            case 'rewards': return <GiveRewards />;
            case 'schemes': return <SchemesAndLoans />;
            case 'badges': return <CreateBadges />;
            default: return <DashboardHome />;
        }
    };

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        
            <div className="relative min-h-screen bg-gray-100 font-sans">
                <Sidebar 
                    activeView={activeView} 
                    setActiveView={setActiveView} 
                    isOpen={isSidebarOpen} 
                    setIsOpen={setIsSidebarOpen} 
                />
                
                {/* The main content area now has a left margin on large screens to prevent overlap */}
                <main className="lg:ml-64 transition-all duration-300">
                     {/* Header with Hamburger Menu for Mobile */}
                    <div className="sticky top-0 z-20 bg-white shadow-sm lg:hidden flex items-center justify-between p-4">
                        <h1 className="text-xl font-bold text-gray-800">Farmify Admin</h1>
                        <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-md text-gray-500 hover:bg-gray-200">
                            <HamburgerIcon className="w-6 h-6" />
                        </button>
                    </div>
                    
                    <div className="p-4 lg:p-8">
                        {renderActiveView()}
                    </div>
                </main>
            </div>
        
    );
};

export default AdminPage;

