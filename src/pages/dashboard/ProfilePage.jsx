import { useEffect, useState } from "react";
import myaxios from "../../utils/myaxios";
import { errorToast, successToast } from "../../utils/toast";

const defaultUser = {
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
}

const ProfilePage = () => {

    const [user, setUser] = useState(defaultUser);

    useEffect(() => {
        myaxios.get("/user-profile")
            .then((response) => {
                if (response.data.status === "success") {
                    const apiData = response.data.data;
                    setUser({
                        email: apiData.email,
                        firstName: apiData.firstName,
                        lastName: apiData.lastName,
                        mobile: apiData.mobile,
                        password: apiData.password,
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.password.value != "") {
            setUser({
                ...user,
                password: e.target.password.value
            })
        }

        // console.log(user);

        myaxios.post(
            "/user-update",
            user,
        ).then((response) => {
            if (response.data.status === "success") {
                successToast("Profile Updated Successfully!");
            } else {
                errorToast("Profile Update Failed!");
            }
        }).catch((error) => {
            console.error(error);
            errorToast("Profile Update Failed!");
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="card animated fadeIn w-100 p-3">
                            <div className="card-body">
                                <h4>User Profile</h4>
                                <hr />
                                <div className="container-fluid m-0 p-0">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row m-0 p-0">
                                            <div className="col-md-4 p-2">
                                                <label>Email Address</label>
                                                <input
                                                    id="email"
                                                    placeholder="User Email"
                                                    className="form-control"
                                                    type="email"
                                                    name="email"
                                                    value={user.email}
                                                    readOnly
                                                    disabled
                                                />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>First Name</label>
                                                <input
                                                    id="firstName"
                                                    placeholder="First Name"
                                                    className="form-control"
                                                    type="text"
                                                    name="firstName"
                                                    value={user.firstName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Last Name</label>
                                                <input
                                                    id="lastName"
                                                    placeholder="Last Name"
                                                    className="form-control"
                                                    type="text"
                                                    name="lastName"
                                                    value={user.lastName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Mobile Number</label>
                                                <input
                                                    id="mobile"
                                                    placeholder="Mobile"
                                                    className="form-control"
                                                    type="mobile"
                                                    name="mobile"
                                                    value={user.mobile}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Password</label>
                                                <input
                                                    id="password"
                                                    placeholder="User Password"
                                                    className="form-control"
                                                    type="password"
                                                    name="password"
                                                />
                                            </div>
                                        </div>
                                        <div className="row m-0 p-0">
                                            <div className="col-md-4 p-2">
                                                <button
                                                    type="submit"
                                                    className="btn mt-3 w-100  bg-gradient-primary"
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
