import { useNavigate } from "react-router";
import myaxios from "../utils/myaxios";

const SetPasswordPage = () => {
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        const token = localStorage.getItem("token");

        // console.log(data);

        myaxios.post(
            "/reset-password",
            data,
        ).then((response) => {
            if (response.data.status === "success") {
                console.log(response.data);
                navigate("/dashboard/index");
            } else {
                console.error(response.data);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-6 center-screen">
                            <div className="card animated fadeIn w-90  p-4">
                                <div className="card-body">
                                    <h4>Set New Password</h4>
                                    <br/>
                                    <form onSubmit={handleSubmit}>
                                        <label>Your New Password</label>
                                        <input id="password" placeholder="New Password" className="form-control" type="password" name="password"/>
                                        <br/>
                                        <button type="submit" className="btn w-100 float-end bg-gradient-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SetPasswordPage;