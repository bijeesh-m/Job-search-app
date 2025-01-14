import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const toastId = toast.loading("Loading...");
        console.log(formData);
        axios
            .post("http://localhost:4000/auth/register", formData, { withCredentials: true })
            .then((res) => {
                console.log(res);
                toast.success("Registered successfully!", { id: toastId });
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.response?.data.message, { id: toastId });
            });
    };

    return (
        <div>
            <div>
                <h2 className=" text-center mt-5">Register</h2>
                <form onSubmit={handleRegister} className=" container p-5   d-flex flex-column gap-2 border rounded">
                    <label htmlFor="name">Name</label>
                    <input
                        value={formData.name}
                        onChange={(e) => handleChange(e)}
                        className=" form-control"
                        type="name"
                        name="name"
                        id="name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        className=" form-control"
                        type="email"
                        name="email"
                        id="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                        className=" form-control"
                        type="password"
                        name="password"
                        id="password"
                    />
                    <label htmlFor="password">Role</label>
                    <select value={formData.role} onChange={(e) => handleChange(e)} name="role" id="role">
                        <option value="Admin">Admin</option>
                        <option value="Recruiter">Recruiter</option>
                        <option value="Job Seeker" selected>
                            Job Seeker
                        </option>
                    </select>
                    <button className=" btn btn-primary">Register</button>
                    <p>
                        Already have an account ?<Link to={"/login"}> login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;