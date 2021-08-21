import Header from "./Header"
import { withRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'

function UpdateProduct(props) {


    const [data, setData] = useState([])
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(async () => {
        let result = await fetch("http://127.0.0.1:8000/api/product/" + props.match.params.id);
        result = await result.json();
        setData(result)
        setName(result.name)
        setPrice(result.price)
        setDescription(result.description)
        setFile(result.file);

    }
        , [])

    async function editProduct(id) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        let result = await fetch("http://127.0.0.1:8000/api/updateproduct/" + id + "?_method=PUT", {
            method: 'POST',
            body: formData
        });
        alert("Data has been updated")
    }
    return (
        <div>
            <Header />
            <h1>Update Product Page </h1>
            <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={data.name} /> <br /><br />
            <input type="text" onChange={(e) => setPrice(e.target.value)} defaultValue={data.price} /> <br /><br />
            <input type="text" onChange={(e) => setDescription(e.target.value)} defaultValue={data.description} /> <br /><br />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} defaultValue={data.file_path} /><br /><br />
            <label>The product have this image</label><br /><br />
            <img style={{ width: 150 }} src={"http://127.0.0.1:8000/" + data.file_path} /><br /><br />
            <button onClick={() => editProduct(data.id)} className="btn btn-primary">Update</button>

        </div>
    )
}

export default withRouter(UpdateProduct)