import React from 'react';
import { leaderboardData } from '../data/mockData.js';

const Leaderboard = () => (
    <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Top Farmer Leaderboards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['month', 'year'].map(period => (
                 <div key={period} className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700 capitalize mb-4">Top Farmers of the {period}</h2>
                     <ul className="space-y-4">
                         {leaderboardData[period].map(farmer => (
                             <li key={farmer.rank} className="flex items-center bg-gray-50 p-3 rounded-lg">
                                <span className="text-lg font-bold text-gray-500 w-8">{farmer.rank}</span>
                                <img src={farmer.avatar} alt={farmer.name} className="w-10 h-10 rounded-full mx-4" />
                                <span className="flex-grow font-semibold text-gray-800">{farmer.name}</span>
                                <span className="text-xs text-gray-500 leading-none">Sustainable Score   </span>
                                <span className="text-green-600 font-bold text-lg leading-tigh">{farmer.score} pts</span>
                            </li>
                         ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default Leaderboard;