import React, { useState } from 'react';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        productName: '',
        productPrice: '',
        productDescription: '',
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
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Product Price:</label>
                    <input
                        type="text"
                        name="productPrice"
                        value={formData.productPrice}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Product Description:</label>
                    <textarea
                        name="productDescription"
                        value={formData.productDescription}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;
