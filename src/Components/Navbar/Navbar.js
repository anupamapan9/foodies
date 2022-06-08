import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between text-white bg-indigo-700 h-20 items-center px-20'>
            <div className='text-2xl font-semibold'>
                <h2 className='cursor-pointer'>Foodies</h2>
            </div>
            <div>
                <p>Explore food of the world</p>
            </div>
        </nav>
    );
};

export default Navbar;