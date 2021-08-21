import Header from "./Header"
import { useState } from 'react'


function AddProduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function addProduct() {
        console.warn(name, file, price, description)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
            method: 'POST',
            body: formData
        });
        alert("Data has been saved")

    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Add Your Product </h1>
                <input type="text" placeholder="Product Name" onChange={(e) => setName(e.target.value)} className="form-control" />
                <br />
                <input type="file" placeholder="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" />
                <br />
                <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} className="form-control" />
                <br />
                <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="form-control" />
                <br />
                <button onClick={addProduct} className="btn btn-primary">Add Product</button>
            </div>


        </div>
    )
}

export default AddProduct