import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import AppContaner from './AppContainer';
import api from '../api';

const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [loadingManufacturers, setLoadingManufacturers] = useState(false);

    const [manufacturers, setManufacturers] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selected, setSelected] = useState(1);


    const onAddSubmit = async () => {
        setLoading(true);
        try {
            let product = {
                "name": title,
                "description": description,
                "price": price,
                "manufacturer_id": selected
            };
            await api.addProduct(product);
            history.push('/');
        } catch {
            alert('Failed to add product!');
        } finally {
            setLoading(false);
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

    const ispisiManufacturere = () => {
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

    const handleChange = (e) => {
        var id = $(e.target).children(":selected").attr("id");
        setSelected(id);
    }

    return (
        <AppContaner title="ADD Product">
            <form>
                <div className="form-group">
                    <label>Product Name</label>
                    <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" type="text" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Manufacturer</label>
                    <select onChange={handleChange} className="custom-select" aria-label="Default select example" >
                        {ispisiManufacturere()}
                    </select>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success" onClick={onAddSubmit} disabled={loading}>{loading ? 'Loading...' : 'Add'}</button>
                </div>
            </form>
        </AppContaner>
    );
};

export default Add;
