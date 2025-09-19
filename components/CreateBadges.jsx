import React, { useState } from 'react';

// --- SVG Icons for Badges and UI ---
const WaterDropIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
);
const LeafIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.21.9 4.21 2.34 5.66L2 22h20l-4.34-4.34C19.1 16.21 20 14.21 20 12z" />
        <path d="M2 12a8 8 0 0 1 8-8" />
    </svg>
);
const TrophyIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
);
const UploadIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

// --- Initial Mock Data for Badges ---
const initialBadges = [
    { id: 1, name: 'Jal Rakshak', icon: <WaterDropIcon className="text-blue-500" />, description: 'Awarded for exceptional water conservation efforts.' },
    { id: 2, name: 'Dharti Mitra', icon: <LeafIcon className="text-green-500" />, description: 'Recognizes commitment to soil health and organic farming.' },
    { id: 3, name: 'Mission Pro', icon: <TrophyIcon className="text-yellow-500" />, description: 'Awarded for completing 10 or more missions successfully.' },
];

const CreateBadges = () => {
    const [badges, setBadges] = useState(initialBadges);
    const [newBadgeName, setNewBadgeName] = useState('');
    const [newBadgeDesc, setNewBadgeDesc] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImagePreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleCreateBadge = (e) => {
        e.preventDefault();
        if (!newBadgeName || !newBadgeDesc || !imagePreview) {
            alert('Please fill out all fields and select an image.');
            return;
        }

        const newBadge = {
            id: Date.now(),
            name: newBadgeName,
            // In a real app, the icon would be the uploaded image URL
            icon: <img src={imagePreview} alt={newBadgeName} className="w-12 h-12 object-cover rounded-full" />,
            description: newBadgeDesc,
        };

        setBadges([...badges, newBadge]);
        setNewBadgeName('');
        setNewBadgeDesc('');
        setImagePreview(null);
        e.target.reset(); // Reset the form including the file input
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Badge Management</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Create New Badge Section */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-700 mb-6">Create a New Badge</h2>
                    <form onSubmit={handleCreateBadge} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Badge Image</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    {imagePreview ? (
                                        <img src={imagePreview} alt="Badge preview" className="mx-auto h-24 w-24 object-cover rounded-full" />
                                    ) : (
                                        <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                                    )}
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none">
                                            <span>Upload an image</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="badgeName" className="block text-sm font-medium text-gray-700">Badge Name</label>
                            <input
                                type="text"
                                id="badgeName"
                                value={newBadgeName}
                                onChange={(e) => setNewBadgeName(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                placeholder="e.g., Eco Warrior"
                            />
                        </div>

                        <div>
                            <label htmlFor="badgeDesc" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="badgeDesc"
                                rows="3"
                                value={newBadgeDesc}
                                onChange={(e) => setNewBadgeDesc(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                placeholder="What is this badge for?"
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            Create Badge
                        </button>
                    </form>
                </div>
                
                {/* Current Badges Section */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-700 mb-6">Current Badges ({badges.length})</h2>
                    <div className="space-y-4">
                        {badges.map(badge => (
                            <div key={badge.id} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex-shrink-0">
                                    {badge.icon}
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-bold text-gray-800">{badge.name}</h3>
                                    <p className="text-sm text-gray-600">{badge.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBadges;