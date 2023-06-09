import React from 'react';
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, quantity, supplier, taste, category, photo} = coffee;
    
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
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining);
                        }
                    })
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
                <div className="card-actions justify-end items-centern">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;