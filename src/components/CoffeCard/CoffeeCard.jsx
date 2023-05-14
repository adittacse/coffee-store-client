import React from 'react';
import Swal from "sweetalert2";

const CoffeeCard = ({coffee}) => {
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;
    
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    
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
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;