import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0)
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const addItemButtonPressed = () => {
        props.addItem({ name: name, price: price, type: type, brand: brand });
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    };

    return (
        <div className="container">
            <div className="row">
                <h2>Add A Item</h2>
            </div>

            <div className="row">
                <label htmlFor="name-field">Name: </label>
                <input
                    id="name-field"
                    type="text"
                    value={name}
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}>
                </input>

                <label htmlFor="price-field">Price: </label>
                <input
                    id="price-field"
                    type="number"
                    value={price}
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}>
                </input>

                <label htmlFor="type-field">Type: </label>
                <input
                    id="type-field"
                    type="text"
                    value={type}
                    className="form-control"
                    onChange={(e) => setType(e.target.value)}>
                </input>

                <label htmlFor="brand-field">Brand: </label>
                <input
                    id="brand-field"
                    type="text"
                    value={brand}
                    className="form-control"
                    onChange={(e) => setBrand(e.target.value)}>
                </input>
            </div>

            <div className="row mt-3">
                <button type="button" className="btn btn-dark" onClick={addItemButtonPressed}>
                    Add Item
                </button>
            </div>
        </div>
    );
}

export default AddItem;
