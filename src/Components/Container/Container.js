import React, { useEffect, useState } from 'react';

const Container = () => {
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')


    const searchFood = e => {
        e.preventDefault()
        const searchText = e.target.food.value;
        setSearch(searchText)
    }
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setFoods(data.meals));
    }, [url])
    return (
        <section>
            <div className='flex justify-center my-10'>
                <form onSubmit={searchFood}>
                    <input type="text" className='border-2 outline-indigo-900 border-indigo-500 mr-4' name="food" id="food" />
                    <input type="submit" className='bg-indigo-600 px-2 py-1 text-white cursor-pointer' value="Search" />
                </form>
            </div>
            <div>
                {
                    foods?.map(food => <h2>{food?.strMeal}</h2>)
                }
            </div>
        </section>
    );
};

export default Container;