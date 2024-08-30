import axios from "axios";
import React from "react";
import './App.css';

function Table({ products, setProducts, showForm }) {
    const url = 'http://localhost:8080/';

    // Delete a product
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${url}delete/${id}`);
            // Remove the product from the state after deletion
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }

    return (
        <div className="tables">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Place</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                products.map((data) => (
                    <tbody key={data.id}>
                        <tr>
                            <th>{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.mobile}</td>
                            <td>{data.place}</td>
                            <td><button className="btn btn-primary" onClick={() => showForm(data)} >Edit</button></td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteProduct(data.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default Table;
