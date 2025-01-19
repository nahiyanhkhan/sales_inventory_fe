const ReportPage = () => {
    return (
        <div id="contentRef" className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h4>Sales Report</h4>
                                <label className="form-label mt-2">Date From</label>
                                <input id="FormDate" type="date" className="form-control"/>
                                <label className="form-label mt-2">Date To</label>
                                <input id="ToDate" type="date" className="form-control"/>
                                <button onclick="SalesReport()" className="btn mt-3 bg-gradient-primary">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        // <script>

        //     function SalesReport() {
        //         let FormDate = document.getElementById('FormDate').value;
        //         let ToDate = document.getElementById('ToDate').value;
        //         if(FormDate.length === 0 || ToDate.length === 0){
        //             errorToast("Date Range Required !")
        //         }else{
        //             window.open('/sales-report/'+FormDate+'/'+ToDate);
        //         }
        //     }

        // </script>
    );
};

export default ReportPage;