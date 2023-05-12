import React from 'react';

const AddCoffee = () => {
    return (
        <div>
            <form>
                <div className="flex">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;