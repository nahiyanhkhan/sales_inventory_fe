const ProductPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="card px-5 py-5">
                            <div className="row justify-content-between ">
                                <div className="align-items-center col">
                                    <h4>Product</h4>
                                </div>
                                <div className="align-items-center col">
                                    <button data-bs-toggle="modal" data-bs-target="#create-modal" className="float-end btn m-0  bg-gradient-primary">Create</button>
                                </div>
                            </div>
                            <hr className="bg-dark "/>
                            <table className="table" id="tableData">
                                <thead>
                                    <tr className="bg-light">
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Unit</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="tableList">
                                    <tr className="odd">
                                        <td className="sorting_1"><img className="w-15 h-auto" alt="" src="./uploads/1-1692093134-2.jpg"/></td>
                                        <td>sd</td>
                                        <td>52</td>
                                        <td>4</td>
                                        <td>
                                            <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                            <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="even">
                                        <td className="sorting_1"><img className="w-15 h-auto" alt="" src="./uploads/1-1692093134-2.jpg"/></td>
                                        <td>sd</td>
                                        <td>52</td>
                                        <td>4</td>
                                        <td>
                                            <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                            <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="sorting_1"><img className="w-15 h-auto" alt="" src="./uploads/1-1692093134-2.jpg"/></td>
                                        <td>sd</td>
                                        <td>52</td>
                                        <td>4</td>
                                        <td>
                                            <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                            <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="even">
                                        <td className="sorting_1"><img className="w-15 h-auto" alt="" src="./uploads/1-1692093134-2.jpg"/></td>
                                        <td>sd</td>
                                        <td>52</td>
                                        <td>4</td>
                                        <td>
                                            <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                            <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="sorting_1"><img className="w-15 h-auto" alt="" src="./uploads/1-1692093134-2.jpg"/></td>
                                        <td>sd</td>
                                        <td>52</td>
                                        <td>4</td>
                                        <td>
                                            <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                            <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="even">
                                        <td className="sorting_1"><img className="w-15 h-auto" alt="" src="./uploads/1-1692093134-2.jpg"/></td>
                                        <td>sd</td>
                                        <td>52</td>
                                        <td>4</td>
                                        <td>
                                            <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                            <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="sorting_1"><img className="w-15 h-auto" alt="" src="./uploads/1-1692093134-2.jpg"/></td>
                                        <td>sd</td>
                                        <td>52</td>
                                        <td>4</td>
                                        <td>
                                            <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                            <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="even">
                                        <td className="sorting_1"><img className="w-15 h-auto" alt="" src="./uploads/1-1692093134-2.jpg"/></td>
                                        <td>sd</td>
                                        <td>52</td>
                                        <td>4</td>
                                        <td>
                                            <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                            <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            <div className="modal animated zoomIn" id="delete-modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <h3 className=" mt-3 text-warning">Delete !</h3>
                            <p className="mb-3">Once delete, you can't get it back.</p>
                            <input className="d-none" id="deleteID"/>
                            <input className="d-none" id="deleteFilePath"/>
                            
                        </div>
                        <div className="modal-footer justify-content-end">
                            <div>
                                <button type="button" id="delete-modal-close" className="btn bg-gradient-success mx-2" data-bs-dismiss="modal">Cancel</button>
                                <button onclick="itemDelete()" type="button" id="confirmDelete" className="btn bg-gradient-danger" >Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="modal animated zoomIn" id="create-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Product</h5>
                        </div>
                        <div className="modal-body">
                            <form id="save-form">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 p-1">
                                            
                                            <label className="form-label">Category</label>
                                            <select type="text" className="form-control form-select" id="productCategory">
                                                <option value="">Select Category</option>
                                            </select>
                                            
                                            <label className="form-label mt-2">Name</label>
                                            <input type="text" className="form-control" id="productName"/>
                                            
                                            <label className="form-label mt-2">Price</label>
                                            <input type="text" className="form-control" id="productPrice"/>
                                            
                                            <label className="form-label mt-2">Unit</label>
                                            <input type="text" className="form-control" id="productUnit"/>
                                            
                                            <br/>
                                            <img className="w-15" id="newImg" src="./images/default.jpg"/>
                                            <br/>
                                            
                                            <label className="form-label">Image</label>
                                            <input oninput="newImg.src=window.URL.createObjectURL(this.files[0])" type="file" className="form-control" id="productImg"/>
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button id="modal-close" className="btn bg-gradient-primary mx-2" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            <button onclick="Save()" id="save-btn" className="btn bg-gradient-success" >Save</button>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            <div className="modal animated zoomIn" id="update-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Product</h5>
                        </div>
                        <div className="modal-body">
                            <form id="update-form">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 p-1">
                                            
                                            
                                            <label className="form-label">Category</label>
                                            <select type="text" className="form-control form-select" id="productCategoryUpdate">
                                                <option value="">Select Category</option>
                                            </select>
                                            
                                            <label className="form-label mt-2">Name</label>
                                            <input type="text" className="form-control" id="productNameUpdate"/>
                                            
                                            <label className="form-label mt-2">Price</label>
                                            <input type="text" className="form-control" id="productPriceUpdate"/>
                                            
                                            <label className="form-label mt-2">Unit</label>
                                            <input type="text" className="form-control" id="productUnitUpdate"/>
                                            <br/>
                                            <img className="w-15" id="oldImg" src="./images/default.jpg"/>
                                            <br/>
                                            <label className="form-label mt-2">Image</label>
                                            <input oninput="oldImg.src=window.URL.createObjectURL(this.files[0])"  type="file" className="form-control" id="productImgUpdate"/>
                                            
                                            <input type="text" className="d-none" id="updateID"/>
                                            <input type="text" className="d-none" id="filePath"/>
                                        
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div className="modal-footer">
                            <button id="update-modal-close" className="btn bg-gradient-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            <button onclick="update()" id="update-btn" className="btn bg-gradient-success" >Update</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;