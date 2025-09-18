import React, { useState, useEffect } from 'react';

// --- Icon Components for UI Enhancement ---
const ListIcon = (props) => (
    <div className="p-3 bg-blue-100 rounded-full">
        <svg {...props} className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
    </div>
);
const UsersIcon = (props) => (
    <div className="p-3 bg-green-100 rounded-full">
        <svg {...props} className="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    </div>
);

// --- Initial Mock Data ---
const initialSchemes = [
    { id: 1, name: 'Solar Pump Subsidy', description: 'Provides a 50% subsidy on solar-powered water pumps for irrigation.' },
    { id: 2, name: 'Organic Farming Grant', description: 'A grant of ₹25,000 for farmers certified for switching to organic methods.' },
    { id: 3, name: 'Micro-Irrigation Initiative', description: 'Financial aid and technical support for installing drip and sprinkler systems.' },
    { id: 4, name: 'Crop Insurance Scheme (PMFBY)', description: 'Insurance coverage and financial support to farmers in the event of crop failure.' },
];

// --- Modal Component for Adding a New Scheme ---
const AddSchemeModal = ({ onClose, onAddScheme }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description) {
            alert('Please fill out both fields.');
            return;
        }
        onAddScheme({ name, description });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a New Scheme</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="schemeName" className="block text-sm font-medium text-gray-700">Scheme Name</label>
                        <input
                            type="text"
                            id="schemeName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="e.g., Water Conservation Grant"
                            autoFocus
                        />
                    </div>
                    <div>
                        <label htmlFor="schemeDesc" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="schemeDesc"
                            rows="3"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="Briefly describe the scheme and its benefits."
                        ></textarea>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button type="button" onClick={onClose} className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                            Cancel
                        </button>
                        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            Save Scheme
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- Main SchemesAndLoans Component ---
const SchemesAndLoans = () => {
    const [schemes, setSchemes] = useState(initialSchemes);
    const [scoreThreshold, setScoreThreshold] = useState('');
    const [selectedScheme, setSelectedScheme] = useState(schemes.length > 0 ? schemes[0].id : '');
    const [successMessage, setSuccessMessage] = useState('');
    const [showSchemes, setShowSchemes] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // If the schemes list is empty, don't select anything. Otherwise, select the first one.
        setSelectedScheme(schemes.length > 0 ? schemes[0].id : '');
    }, [schemes]);
    
    const handleUnlockSubmit = (e) => {
        e.preventDefault();
        if (!scoreThreshold || !selectedScheme) {
            alert('Please select a scheme and enter a minimum score.');
            return;
        }
        const schemeName = schemes.find(s => s.id === parseInt(selectedScheme))?.name;
        const message = `Successfully unlocked "${schemeName}" for all farmers with a score above ${scoreThreshold}.`;
        setSuccessMessage(message);
        setScoreThreshold('');
        setTimeout(() => setSuccessMessage(''), 5000);
    };

    const handleAddScheme = (newScheme) => {
        const schemeToAdd = { ...newScheme, id: Date.now() }; // Use timestamp for a unique ID
        setSchemes([...schemes, schemeToAdd]);
        setSuccessMessage(`Successfully added the new scheme: "${newScheme.name}".`);
        setTimeout(() => setSuccessMessage(''), 5000);
    };

    return (
        <div>
            {isModalOpen && <AddSchemeModal onClose={() => setIsModalOpen(false)} onAddScheme={handleAddScheme} />}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Government Schemes & Loans</h1>
                <button onClick={() => setIsModalOpen(true)} className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    Add New Scheme
                </button>
            </div>

            {/* Success Message Display */}
            {successMessage && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md" role="alert">
                    <p className="font-bold">Success!</p>
                    <p>{successMessage}</p>
                </div>
            )}

            {/* Stat Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4">
                    <ListIcon />
                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Total Schemes Listed</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-1">{schemes.length}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4">
                    <UsersIcon />
                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Farmers Benefited</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-1">2,450</p> {/* Static data for demo */}
                    </div>
                </div>
            </div>

            {/* Main Actions */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-700">Scheme Management</h2>
                    <button onClick={() => setShowSchemes(!showSchemes)} className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                        {showSchemes ? 'Hide All Schemes' : 'View All Schemes'}
                    </button>
                </div>
                
                {/* View All Schemes Section */}
                {showSchemes && (
                    <div className="mt-6 border-t pt-6">
                        <ul className="space-y-4">
                            {schemes.map(scheme => (
                                <li key={scheme.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-gray-800">{scheme.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{scheme.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            
            {/* Unlock Scheme Section */}
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-700 mb-4">Unlock Scheme by Score</h2>
                <p className="text-sm text-gray-500 mb-6">Make a scheme available to farmers who meet a sustainability score.</p>
                <form onSubmit={handleUnlockSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="schemeSelect" className="block text-sm font-medium text-gray-700">Select Scheme</label>
                        <select
                            id="schemeSelect"
                            value={selectedScheme}
                            onChange={(e) => setSelectedScheme(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        >
                             {schemes.map(scheme => (
                                <option key={scheme.id} value={scheme.id}>{scheme.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="scoreThreshold" className="block text-sm font-medium text-gray-700">Minimum Sustainability Score</label>
                        <input
                            type="number"
                            id="scoreThreshold"
                            value={scoreThreshold}
                            onChange={(e) => setScoreThreshold(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                            placeholder="e.g., 75"
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        Unlock Scheme
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SchemesAndLoans;