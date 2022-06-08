import React from 'react';

const FoodCard = ({ food }) => {
    const { idMeal, strArea, strMeal, strCategory, strMealThumb } = food;
    return (
        <div className='w-72 bg-slate-50 px-10 py-5 drop-shadow-lg shadow-slate-400 rounded-md flex flex-col justify-center'>
            <h4 className='text-center my-2'>#{idMeal}</h4>
            <div className=' flex justify-center'>
                <img src={strMealThumb} className="w-52 h-52 rounded-full" alt="" />
            </div>
            <h2 className='text-center my-5 font-semibold'>{strMeal}</h2>
            <div className='flex justify-between'>
                <span className='rounded-md bg-indigo-500 px-2 text-white'>{strArea}</span>
                <span className='rounded-md bg-green-500 px-2 text-white'>{strCategory}</span>
            </div>
        </div>
    );
};

export default FoodCard;