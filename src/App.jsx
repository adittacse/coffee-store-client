import { useState } from 'react';
import './App.css';
import {useLoaderData} from "react-router-dom";

function App() {
    const coffees = useLoaderData();

    return (
        <div className="App">
            <h1 className="text-6xl text-purple-600">Coffee Store</h1>
            <p>{coffees.length}</p>
        </div>
    )
}

export default App
