import React from 'react';

const CoffeeCard = ({coffee}) => {
    const {name, quantity, supplier, taste, category, details, photo} = coffee;
    
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="items-center" src={photo} alt="Movie"/></figure>
            <div className="flex items-center justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Suppler: {supplier}</p>
                    <p>Taste: {taste}</p>
                    <p>Category: {category}</p>
                </div>
                <div className="card-actions justify-end items-center">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn">View</button>
                        <button className="btn">Edit</button>
                        <button className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;