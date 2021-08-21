import Header from "./Header"
import { useState } from 'react'
import { Table } from 'react-bootstrap'

function SearchProduct() {
    const [data, setData] = useState([])
    async function search(key) {
        if (key.length > 1) {
            let result = await fetch("http://127.0.0.1:8000/api/search/" + key)
            result = await result.json();
            console.warn(result)
            setData(result)
        }
    }

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Product</h1>
                <br />
                <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="Search Product" />
                {
                    data.length > 0 ?
                        <Table>

                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>


                            {
                                data.map((item) =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td><img style={{ width: 150 }} src={"http://127.0.0.1:8000/" + item.file_path} /> </td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            }

                        </Table>
                        : <h4>Results will be here</h4>
                }
            </div>


        </div>
    )
}

export default SearchProduct