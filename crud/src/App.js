import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [openForm, setOpenForm] = useState(false);
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null); 

    const url = 'http://localhost:8080/';

    const showForm = (data) => {
        setEditingProduct(data);
        setOpenForm(true);
    }

    // Fetch all products when the component mounts
    useEffect(() => {
        fetchAllProducts();

    }, []);

    const fetchAllProducts = async () => {
        try {
         
            const response = await axios.get(`${url}getAll`);
            setProducts(response.data);
            
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const showFormOut = () => {
      setEditingProduct(null);
    
      setOpenForm(false);
      fetchAllProducts();
  }
    const saveProduct = async (product) => {
        try {
            if (editingProduct) {
                // Update existing product
                const response = await axios.put(`${url}update/${editingProduct.id}`, product);
                fetchAllProducts();
            } else {
                // Add new product
                const response = await axios.post(`${url}save`, product);
                // Update the product list
                setProducts((prevProducts) => [...prevProducts, response.data]);
            }
            setOpenForm(false);
            setEditingProduct(null);
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <div>
            <h2 className='text-center mt-4'>Crud operation</h2>
            <div>
                <button type='button' className='btn btn-primary mt-2' onClick={() => showForm(null)}>
                    Add user
                </button>
            </div>
            <Table products={products} setProducts={setProducts} showForm={showForm} />
            {openForm && <Form
                addProduct={saveProduct}
                closeForm={showFormOut}
                initialData={editingProduct} // Pass initial data for form
            />}
        </div>
    );
}

export default App;
