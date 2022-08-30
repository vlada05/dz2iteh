import React, { useState, useEffect } from 'react'
import AppContaner from './AppContainer';
import api from '../api';

const Manufacturer = () => {
    const [loadingManufacturers, setLoadingManufacturers] = useState(false);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [manufacturers, setManufacturers] = useState([]);
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState(1);

    const popuniProizvode = (e) => {
        var id = $(e.target).children(":selected").attr("id");
        setSelected(id);
    }

    const rezultat = () => {
        if (loadingProducts) {
            return (
                <AppContaner title="Loading">
                    <span>Loading products...</span>
                </AppContaner>
            );
        }
        if (products.length === 0) {
            return (
                <AppContaner title="No data to show">
                    <span>That manufacturer have no mobile phones at the moments</span>
                </AppContaner>
            );
        }

        return products.map((product) => (
            <AppContaner key={product.id} title={product.name}>
                <span><b>Description:   </b></span>
                <span>{product.description}</span><br />
                <span><b>Price:   </b></span>
                <span>{product.price} eur</span>
            </AppContaner>
        ));
    }


    const fetchProducts = async () => {
        setLoadingProducts(true);
        api.getAllManufecturerProducts(selected).then(res => {
            const result = res.data;
            const prods = result.products;
            setProducts(prods);
        })
        setLoadingProducts(false);
    };

    const vratiManufacturere = () => {
        if (loadingManufacturers) {
            return (
                <option>Loading manufacturers</option>
            );
        } else {
            return manufacturers.map((manufacturer) => (
                <option key={manufacturer.id} id={manufacturer.id}>{manufacturer.name}</option>
            ));
        }
    }

    const fetchManufacturers = async () => {
        setLoadingManufacturers(true);
        api.getAllManufacturers().then(res => {
            const result = res.data;
            const mans = result.manufacturers;
            setManufacturers(mans);
        })
        setLoadingManufacturers(false);
    };

    useEffect(() => {
        fetchManufacturers();
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [selected]);

    return (
        <>
            <AppContaner title="Manufacturers">
                <form>
                    <div className="form-group">
                        <label>Select manufacturer to see his all his products</label>
                        <select onChange={popuniProizvode} className="custom-select" aria-label="Default select example" >
                            {vratiManufacturere()}
                        </select>
                    </div>
                </form>
            </AppContaner>
            <hr />
            {rezultat()}
        </>
    );
};

export default Manufacturer;