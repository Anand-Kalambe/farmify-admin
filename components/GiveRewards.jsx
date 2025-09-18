import React, { useState } from 'react';

const GiveRewards = () => {
    const [scoreThreshold, setScoreThreshold] = useState('');
    const [rewardDescription, setRewardDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [topFarmerForm, setTopFarmerForm] = useState(null); // Can be 'Month', 'Year', or null
    const [topFarmerReward, setTopFarmerReward] = useState('');

    // Handle form submission for rewarding based on score
    const handleScoreRewardSubmit = (e) => {
        e.preventDefault();
        if (!scoreThreshold || !rewardDescription) {
            alert('Please fill in both the score and reward description.');
            return;
        }
        // In a real app, you would make an API call here.
        const message = `Successfully sent "${rewardDescription}" to all farmers with a score above ${scoreThreshold}.`;
        setSuccessMessage(message);
        setScoreThreshold('');
        setRewardDescription('');
        setTimeout(() => setSuccessMessage(''), 5000); // Clear message after 5 seconds
    };
    
    // Handle form submission for the top farmer reward
    const handleTopFarmerSubmit = (e) => {
        e.preventDefault();
        if (!topFarmerReward) {
            alert('Please describe the reward for the top farmer.');
            return;
        }
        // In a real app, you would make an API call here.
        const message = `Successfully sent "${topFarmerReward}" to the Top Farmer of the ${topFarmerForm}.`;
        setSuccessMessage(message);
        setTopFarmerReward('');
        setTopFarmerForm(null); // Hide the form after submission
        setTimeout(() => setSuccessMessage(''), 5000);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Distribute Farmer Rewards</h1>

            {/* Success Message Display */}
            {successMessage && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md" role="alert">
                    <p className="font-bold">Success!</p>
                    <p>{successMessage}</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Section 1: Reward by Sustainability Score */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Reward by Score</h2>
                    <p className="text-sm text-gray-500 mb-6">Give a reward to all farmers who have a sustainability score above a certain threshold.</p>
                    <form onSubmit={handleScoreRewardSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="scoreThreshold" className="block text-sm font-medium text-gray-700">Minimum Sustainability Score</label>
                            <input
                                type="number"
                                id="scoreThreshold"
                                value={scoreThreshold}
                                onChange={(e) => setScoreThreshold(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                placeholder="e.g., 80"
                            />
                        </div>
                        <div>
                            <label htmlFor="rewardDescription" className="block text-sm font-medium text-gray-700">Reward Description</label>
                            <input
                                type="text"
                                id="rewardDescription"
                                value={rewardDescription}
                                onChange={(e) => setRewardDescription(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                placeholder="e.g., 500 Bonus Points"
                            />
                        </div>
                        <button type="submit" className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            Distribute Reward
                        </button>
                    </form>
                </div>

                {/* Section 2: Reward Top Performers */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Reward Top Performers</h2>
                    {!topFarmerForm ? (
                        <>
                            <p className="text-sm text-gray-500 mb-6">Select a period to define and send a special reward to the top farmer.</p>
                            <div className="space-y-4">
                                <button 
                                    onClick={() => setTopFarmerForm('Month')}
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Reward Top Farmer of the Month
                                </button>
                                <button 
                                    onClick={() => setTopFarmerForm('Year')}
                                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                                >
                                    Reward Top Farmer of the Year
                                </button>
                            </div>
                        </>
                    ) : (
                        <form onSubmit={handleTopFarmerSubmit} className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-600">Define Reward for Top Farmer of the {topFarmerForm}</h3>
                            <div>
                                <label htmlFor="topFarmerReward" className="block text-sm font-medium text-gray-700">Reward Description</label>
                                <input
                                    type="text"
                                    id="topFarmerReward"
                                    value={topFarmerReward}
                                    onChange={(e) => setTopFarmerReward(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    placeholder="e.g., Premium Seed Pack"
                                    autoFocus
                                />
                            </div>
                            <div className="flex space-x-4">
                                <button type="button" onClick={() => { setTopFarmerForm(null); setTopFarmerReward(''); }} className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                                    Cancel
                                </button>
                                <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Send Reward
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GiveRewards;