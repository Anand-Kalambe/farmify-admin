import React from 'react';

// --- SVG Icons ---
const StarIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

// --- Mock Data for Products ---
const products = [
    { id: 1, name: 'Organic Tomatoes', price: 7000, unit: '10 Quintals', farmer: 'Aarav Sharma', rating: 4.8, image: 'https://placehold.co/400x300/f87171/ffffff?text=Tomatoes' },
    { id: 2, name: 'Basmati Rice', price: 12000, unit: '5 Quintals', farmer: 'Priya Patel', rating: 4.9, image: 'https://placehold.co/400x300/fbbf24/ffffff?text=Rice' },
    { id: 3, name: 'Fresh Spinach', price: 5000, unit: '3 Quintals', farmer: 'Rohan Das', rating: 4.7, image: 'https://placehold.co/400x300/34d399/ffffff?text=Spinach' },
    { id: 4, name: 'Hapus Mangoes', price: 8000, unit: ' 8 dozen', farmer: 'Aarav Sharma', rating: 5.0, image: 'https://placehold.co/400x300/f97316/ffffff?text=Mangoes' },
    { id: 5, name: 'Red Onions', price: 30000, unit: '10 Quintals', farmer: 'Sneha Reddy', rating: 4.6, image: 'https://placehold.co/400x300/c084fc/ffffff?text=Onions' },
    { id: 6, name: 'Organic Potatoes', price: 3500, unit: '1 Quintals', farmer: 'Vikram Singh', rating: 4.7, image: 'https://placehold.co/400x300/964B00/ffffff?text=Potatoes' },
];

const ProductCard = ({ product }) => {
    // Helper to generate star ratings
    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<StarIcon key={i} className={i < Math.round(product.rating) ? 'w-5 h-5 text-yellow-400' : 'w-5 h-5 text-gray-300'} />);
        }
        return stars;
    };

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Sold by {product.farmer}</p>
                <div className="flex items-center my-2">
                    {renderStars()}
                    <span className="text-gray-600 text-sm ml-2">{product.rating.toFixed(1)}</span>
                </div>
                <div className="mt-auto">
                    <p className="text-2xl font-semibold text-gray-900">₹{product.price}<span className="text-base font-normal text-gray-500">/{product.unit}</span></p>
                    <div className="flex space-x-2 mt-4">
                        <button className="w-full py-2 px-4 bg-green-100 text-green-700 font-semibold rounded-lg hover:bg-green-200 transition-colors">Add to Cart</button>
                        <button className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MandiPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow-md">
                <nav className="container mx-auto px-6 py-4">
                    <h1 className="text-3xl font-bold text-green-600">Farmify Mandi</h1>
                    <p className="text-gray-500">Fresh produce directly from our verified farmers.</p>
                </nav>
            </header>
            <main className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MandiPage;