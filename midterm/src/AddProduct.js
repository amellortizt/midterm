import React, { useState } from 'react';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
        console.log(formData);
    };

    return (
        <div>
            <h2>Midterm part 1</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Quantity</label>
                    <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;
