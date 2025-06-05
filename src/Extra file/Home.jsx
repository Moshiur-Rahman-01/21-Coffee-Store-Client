import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';

const Home = () => {
    const initialCoffees = useLoaderData();
    // console.log(coffees)
    const [coffees, setCoffees] = useState(initialCoffees);
    return (
        <div className='container mx-auto p-10'>
            <h1>Total Coffee: {coffees.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;