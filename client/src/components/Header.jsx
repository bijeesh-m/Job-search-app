import axios from "axios";
import React, { useEffect, useState } from "react";

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [jobs, setJobs] = useState([]);

    const [querry, setQuerry] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:4000/jobs")
            .then((res) => {
                console.log(res);
                setJobs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(querry.toLowerCase()));

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        Jobify
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>

                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className=" w-100  d-flex justify-content-between px-3">
                            <button onClick={() => window.location.replace("/job-post")} className=" btn btn-light">
                                Post Job
                            </button>

                            <div className="w-75 h-50 position-relative">
                                <input
                                    type="text"
                                    className=" form-control h-25 w-50"
                                    value={querry}
                                    onChange={(e) => setQuerry(e.target.value)}
                                    name=""
                                    placeholder="Search jobs"
                                    id=""
                                />

                                {querry && (
                                    <div className=" position-absolute z-1 bg-light w-50 p-2 rounded">
                                        {filteredJobs.map((job) => {
                                            return (
                                                <div
                                                    onClick={() => window.location.replace(`/job/${job._id}`)}
                                                    key={job._id}
                                                >
                                                    {job.title}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            {user ? (
                                <h5 style={{ cursor: "pointer" }} onClick={() => window.location.replace("/profile")}>
                                    {user.name}
                                </h5>
                            ) : (
                                <button onClick={() => window.location.replace("/login")}>Login</button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
