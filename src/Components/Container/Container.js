import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';

const Container = () => {
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')


    const searchFood = e => {
        e.preventDefault()
        const searchText = e.target.food.value;
        setSearch(searchText)
        e.target.reset()
    }
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setFoods(data.meals));
    }, [url])
    return (
        <section className='lg:px-20'>
            <h2 className='text-center text-indigo-500 mt-10 font-semibold text-3xl mb-3'>Search Food By name</h2>
            <div className='flex justify-center mb-10'>
                <form onSubmit={searchFood}>
                    <input type="text" className='border-2 outline-indigo-900 border-indigo-500 mr-4' name="food" id="food" />
                    <input type="submit" className='bg-indigo-600 px-2 py-1 text-white cursor-pointer' value="Search" />
                </form>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center'>
                {
                    foods?.map(food => <FoodCard food={food} key={food.idMeal} />)
                }
            </div>
        </section>
    );
};

export default Container;