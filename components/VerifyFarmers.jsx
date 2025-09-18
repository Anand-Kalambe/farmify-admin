import React from 'react';

const VerifyFarmers = () => {
    const farmersToVerify = [
        { id: 3, name: 'Rohan Das', joinDate: '2023-09-12', status: 'Pending' },
        { id: 4, name: 'Sunita Rao', joinDate: '2023-09-11', status: 'Pending' },
        { id: 5, name: 'Kiran Desai', joinDate: '2023-09-10', status: 'Pending' }
    ];
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Verify New Farmers</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {farmersToVerify.map((farmer) => (
                            <tr key={farmer.id}>
                                <td className="py-4 px-6 whitespace-nowrap">{farmer.name}</td>
                                <td className="py-4 px-6 whitespace-nowrap">{farmer.joinDate}</td>
                                <td className="py-4 px-6 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {farmer.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6 whitespace-nowrap space-x-2">
                                    <button className="bg-green-500 text-white px-3 py-1 rounded-md text-xs font-semibold hover:bg-green-600">Approve</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold hover:bg-red-600">Decline</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VerifyFarmers;