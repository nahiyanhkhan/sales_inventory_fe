const CategoryPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="card px-5 py-5">
                            <div className="row justify-content-between ">
                                <div className="align-items-center col">
                                    <h4>Category</h4>
                                </div>
                                <div className="align-items-center col">
                                    <button data-bs-toggle="modal" data-bs-target="#create-modal" className="float-end btn m-0 bg-gradient-primary">Create</button>
                                </div>
                            </div>
                            <hr className="bg-secondary"/>
                            <div className="table-responsive">
                                <table className="table" id="tableData">
                                    <thead>
                                        <tr className="bg-light">
                                            <th>No</th>
                                            <th>Category</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tableList">
                                        <tr className="odd">
                                            <td className="sorting_1">1</td>
                                            <td>Stick</td>
                                            <td>
                                                <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                                <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr className="even">
                                            <td className="sorting_1">2</td>
                                            <td>Machine</td>
                                            <td>
                                                <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                                <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr className="odd">
                                            <td className="sorting_1">3</td>
                                            <td>Eye</td>
                                            <td>
                                                <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                                <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr className="even">
                                            <td className="sorting_1">4</td>
                                            <td>Out</td>
                                            <td>
                                                <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                                <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr className="odd">
                                            <td className="sorting_1">5</td>
                                            <td>Sight</td>
                                            <td>
                                                <button type="button" className="btn editBtn btn-sm btn-outline-success">Edit</button>
                                                <button type="button" className="btn deleteBtn btn-sm btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                        <tr className="even">
                                            <td className="sorting_1">6</td>
                                            <td>Merely</td>
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
            </div>
            
            <div className="modal animated zoomIn" id="delete-modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <h3 className=" mt-3 text-warning">Delete !</h3>
                            <p className="mb-3">Once delete, you can't get it back.</p>
                            <input className="d-none" id="deleteID"/>
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
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="exampleModalLabel">Create Category</h6>
                        </div>
                        <div className="modal-body">
                            <form id="save-form">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 p-1">
                                            <label className="form-label">Category Name *</label>
                                            <input type="text" className="form-control" id="categoryName"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button id="modal-close" className="btn bg-gradient-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            <button onclick="Save()" id="save-btn" className="btn bg-gradient-success" >Save</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="modal animated zoomIn" id="update-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Category</h5>
                        </div>
                        <div className="modal-body">
                            <form id="update-form">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 p-1">
                                            <label className="form-label">Category Name *</label>
                                            <input type="text" className="form-control" id="categoryNameUpdate"/>
                                            <input className="d-none" id="updateID"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button id="update-modal-close" className="btn bg-gradient-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            <button onclick="Update()" id="update-btn" className="btn bg-gradient-success" >Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryPage;