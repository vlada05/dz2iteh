import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import AppContaner from './AppContainer';
import api from '../api';


const Edit = () => {
    const { id } = useParams();
    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [loadingManufacturers, setLoadingManufacturers] = useState(false);

    const [manufacturers, setManufacturers] = useState([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selected, setSelected] = useState([]);

    const onEditSubmit = async () => {
        setLoading(true);
        try {
            let product = {
                "name": name,
                "description": description,
                "price": price,
                "manufacturer_id": selected
            };
            await api.updateProduct(product, id);
            history.push('/');
        } catch {
            alert('Failed to edit product!');
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

    const ispisiManufacturere = () => {
        if (loadingManufacturers) {
            return (
                <option>Loading manufacturers</option>
            );
        } else {
            return manufacturers.map((manufacturer) => (
                <option key={manufacturer.id} id={manufacturer.id} selected={selected === manufacturer.id}>{manufacturer.name}</option>
            ));
        }
    }

    const handleChange = (e) => {
        var id = $(e.target).children(":selected").attr("id");
        setSelected(id);
    }

    useEffect(() => {
        fetchManufacturers();
        api.getOneProduct(id).then(res => {
            const result = res.data;
            const product = result.product;
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setSelected(product.manufacturer_id);
        });
    }, []);

    return (
        <AppContaner title="EDIT Product">
            <form>
                <div className="form-group">
                    <label>Product Name</label>
                    <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} />
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
                    <button type="button" className="btn btn-success" onClick={onEditSubmit} disabled={loading}>{loading ? 'Loading...' : 'Edit'}</button>
                </div>
            </form>
        </AppContaner>
    );
};

export default Edit;
