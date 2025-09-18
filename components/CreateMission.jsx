import React from 'react';

const CreateMission = () => (
    <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Create a New Mission</h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
            <form className="space-y-6">
                <div>
                    <label htmlFor="missionTitle" className="block text-sm font-medium text-gray-700">Mission Title</label>
                    <input type="text" id="missionTitle" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="e.g., Adopt Solar Water Pumps" />
                </div>
                <div>
                    <label htmlFor="missionDesc" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="missionDesc" rows="4" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Detailed description of the mission objectives..."></textarea>
                </div>
                <div>
                    <label htmlFor="rewardPoints" className="block text-sm font-medium text-gray-700">Reward Points </label>
                    <input type="number" id="rewardPoints" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="500" />
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">Create Mission</button>
            </form>
        </div>
    </div>
);

export default CreateMission;