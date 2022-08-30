import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AppContaner from './AppContainer';
import api from '../api';

const Home = () => {
    const [products, setProducts] = useState(null);

    const fetchProducts = async () => {
        api.getAllProducts().then(res => {
            const result = res.data;
            setProducts(result.products);
        })
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const renderProducts = () => {
        if (!products) {
            return (
                <tr>
                    <td colSpan='4'>
                        Loading products...
                    </td>
                </tr>
            )
        }
        if (products.length === 0) {
            return (
                <tr>
                    <td colSpan='4'>
                        There are no products yet. Add some.
                    </td>
                </tr>
            )
        }

        return products.map((product) => (
            <tr key={product.id}>
                <td> {product.id} </td>
                <td> {product.name} </td>
                <td> {product.description} </td>
                <td> {product.price} </td>
                <td>
                    <Link className="btn btn-warning" to={`/edit/${product.id}`}>
                        Edit
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        api.deleteProduct(product.id)
                            .then(fetchProducts)
                            .catch(err => {
                                alert('Failed to remove product with id: ' + product.id)
                            });
                    }}>
                        Delete
                    </button>
                </td>
            </tr>
        ));
    }


    return (
        <AppContaner title="Products">
            <Link to="/add" className="btn btn-primary">Add Product</Link>
            <div className="table-responsive">
                <table className="table table-stripped mt-4">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderProducts()}
                    </tbody>
                </table>
            </div>
        </AppContaner>
    );
};

export default Home;
