import React from 'react';

// --- Icon Components for UI Enhancement ---
const UsersIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.121-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.121-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const CurrencyRupeeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 4h4m5 4h-4.293a1 1 0 01-.707-.293l-3.414-3.414A1 1 0 009.586 12H9.5A2.5 2.5 0 007 14.5v0A2.5 2.5 0 009.5 17h.5" />
    </svg>
);

// --- Mock Data with Status and Sales Info ---
const currentYearFarmers = [
    { id: 1, name: 'Aarav Sharma', joinMonth: 'Jan', status: 'Verified', monthlySales: [1200, 1300, 1500, 1400, 1600, 1800, 1700, 2000] },
    { id: 2, name: 'Priya Patel', joinMonth: 'Feb', status: 'Pending', monthlySales: [0, 900, 1100, 1000, 1200, 1300, 1500, 1500] },
    { id: 3, name: 'Rohan Das', joinMonth: 'Jan', status: 'Verified', monthlySales: [1500, 1600, 1800, 1700, 2000, 2100, 2200, 2300] },
    { id: 4, name: 'Sneha Reddy', joinMonth: 'Mar', status: 'Verified', monthlySales: [0, 0, 800, 900, 1100, 1000, 1200, 1800] },
    { id: 5, name: 'Vikram Singh', joinMonth: 'May', status: 'Pending', monthlySales: [0, 0, 0, 0, 1000, 1200, 1400, 1700] },
];
const missionsData = [
    { id: 1, title: 'Implement Drip Irrigation System', status: 'Active' },
    { id: 2, title: 'Organic Pesticide Usage', status: 'Active' },
    { id: 3, title: 'Plant 50 Native Trees', status: 'Completed' },
];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

// --- Enhanced Bar Chart Component ---
const BarChart = ({ data, title, color, unit = '' }) => {
    const maxValue = data.length > 0 ? Math.max(...data.map(d => d.value)) : 0;
    const yAxisLabels = maxValue > 0 ? [0, Math.round(maxValue / 2), maxValue] : [0];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
            <div className="relative flex items-end h-64">
                {/* Y-Axis Labels and Gridlines */}
                <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-gray-400 -ml-8">
                    {yAxisLabels.map(label => <span key={label}>{unit}{label.toLocaleString('en-IN')}</span>)}
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                    {yAxisLabels.map((_, i) => (
                        <div key={i} className="h-1/2 border-t border-gray-200 border-dashed"></div>
                    ))}
                </div>

                {/* Bars */}
                <div className="relative flex justify-between items-end w-full h-full space-x-2 z-10">
                    {data.map(item => (
                        <div key={item.label} className="group relative flex flex-col items-center flex-1 h-full justify-end">
                            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                                {unit}{item.value.toLocaleString('en-IN')}
                            </div>
                            <div 
                                className={`w-full rounded-t-md ${color} transition-all duration-300 hover:opacity-80`}
                                style={{ height: `${maxValue > 0 ? (item.value / maxValue) * 100 : 0}%` }}
                            ></div>
                        </div>
                    ))}
                     <div className="absolute bottom-0 left-0 w-full flex justify-between">
                         {data.map(item => (
                            <span key={item.label} className="text-xs font-medium text-gray-500 text-center w-full">{item.label}</span>
                         ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main Dashboard Component ---
const DashboardHome = () => {
    // --- Data Computations for Stat Cards ---
    const pendingVerifications = currentYearFarmers.filter(f => f.status === 'Pending').length;
    const activeMissions = missionsData.filter(m => m.status === 'Active').length;
    
    // --- Data Computations for Charts ---
    const monthlySalesData = months.map((month, index) => ({
        label: month,
        value: currentYearFarmers.reduce((sum, farmer) => sum + (farmer.monthlySales[index] || 0), 0)
    }));

    const newFarmersData = months.map(month => ({
        label: month,
        value: currentYearFarmers.filter(farmer => farmer.joinMonth === month).length
    }));

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-gray-500 mb-8">Welcome back, Admin! Here's a snapshot of your platform.</p>
            
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Farmers" value="1,250" color="text-green-600" />
                <StatCard title="Pending Verifications" value={pendingVerifications} color="text-yellow-500" />
                <StatCard title="Active Missions" value={activeMissions} color="text-blue-500" />
                <StatCard title="Farmers Rewarded" value="85" color="text-purple-500" />
            </div>

            {/* Monthly Breakdown Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <BarChart 
                    data={monthlySalesData} 
                    title="Monthly Platform Sales" 
                    color="bg-indigo-500"
                    unit="₹"
                />
                <BarChart 
                    data={newFarmersData} 
                    title="New Farmers Joined Per Month" 
                    color="bg-green-500"
                />
            </div>
        </div>
    );
};

// Reusable component for the top stat cards
const StatCard = ({ title, value, color }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
        <h3 className="text-md font-semibold text-gray-500">{title}</h3>
        <p className={`text-5xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
);

export default DashboardHome;