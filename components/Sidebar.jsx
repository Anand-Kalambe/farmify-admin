import React from 'react';

// --- SVG ICONS ---
const HomeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);
const RocketIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.33-.04-3.86l-2.02-2.02c-1.53-1.53-3.02-1.56-3.86-.04z" /><path d="m21.5 2.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.33-.04-3.86l-2.02-2.02c-1.53-1.53-3.02-1.56-3.86-.04z" /><path d="M16 8 2 22" /><path d="m17.5 15.5 2.5 2.5" /><path d="M13 11 9 7" /></svg>
);
const UserCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>
);
const TrophyIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
);
const GiftIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
);
const FileTextIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
);
const BadgeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.78l1.21 1.22a4 4 0 0 0 5.66 0l1.21-1.22a4 4 0 0 1 4.78 4.78l-1.22 1.21a4 4 0 0 0 0 5.66l1.22 1.21a4 4 0 0 1-4.78 4.78l-1.21-1.22a4 4 0 0 0-5.66 0l-1.21 1.22a4 4 0 0 1-4.78-4.78l1.22-1.21a4 4 0 0 0 0-5.66z" /></svg>
);
const Mandi = (props) => (
    <svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M3 9l1-4h16l1 4" />
  <path d="M5 9v10a1 1 0 001 1h3a1 1 0 001-1V9" />
  <path d="M10 13h4" />
  <path d="M14 9v10a1 1 0 001 1h3a1 1 0 001-1V9" />
</svg>
)

const Sidebar = ({ activeView, setActiveView, isOpen, setIsOpen }) => {
    const navItems = [
        { name: 'Dashboard', icon: HomeIcon, view: 'dashboard' },
        { name: 'Create Mission', icon: RocketIcon, view: 'missions' },
        { name: 'Verify Farmers', icon: UserCheckIcon, view: 'farmers' },
        { name: 'Leaderboard', icon: TrophyIcon, view: 'leaderboard' },
        { name: 'Give Rewards', icon: GiftIcon, view: 'rewards' },
        { name: 'Schemes & Loans', icon: FileTextIcon, view: 'schemes' },
        { name: 'Create Badges', icon: BadgeIcon, view: 'badges' },
        { name:'Mandi',icon:Mandi,view:'mandi'}
    ];

    return (
        <>
            {/* Overlay for mobile */}
            <div 
                className={`fixed inset-0 bg-black/60 z-30 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            ></div>

            <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col p-4 z-40 transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="text-3xl font-bold text-green-400 mb-8 mt-4">Farmify Admin</div>
                <nav className="flex flex-col space-y-2">
                    {navItems.map(item => (
                        <a
                            key={item.name}
                            href="#"
                            onClick={(e) => { 
                                e.preventDefault(); 
                                setActiveView(item.view);
                                if (setIsOpen) {
                                    setIsOpen(false); // Close sidebar on mobile after click
                                }
                            }}
                            className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                                activeView === item.view ? 'bg-green-500 text-white shadow-lg' : 'hover:bg-gray-700'
                            }`}
                        >
                            <item.icon className="h-5 w-5 mr-3" />
                            <span>{item.name}</span>
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;

