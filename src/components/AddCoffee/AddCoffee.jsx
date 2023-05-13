import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        
        // send data to the server
        fetch("http://localhost:3000/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // alert("Coffee added successfully!");
                    Swal.fire({
                        title: "Success!",
                        text: 'Coffee added successfully!',
                        icon: "success",
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add New Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Enter Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                {/* form supplier and taste row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                {/* form category and details row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Enter Cofee Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                {/* form photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <input type="submit" className="btn btn-block" value="Add Coffee"/>
            </form>
        </div>
    );
};

export default AddCoffee;