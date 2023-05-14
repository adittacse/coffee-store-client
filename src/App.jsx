import { useState } from 'react';
import './App.css';
import {useLoaderData} from "react-router-dom";
import CoffeeCard from "./components/CoffeCard/CoffeeCard.jsx";

function App() {
    const coffees = useLoaderData();

    return (
        <div className="App m-20">
            <h1 className="text-6xl text-center text-purple-600 my-10">Coffee Store</h1>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    )
}

export default App
