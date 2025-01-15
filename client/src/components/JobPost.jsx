import axios from "axios";
import React, { useState } from "react";

const JobPost = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const [jobData, setJobData] = useState({
        title: "",
        company: "",
        location: "",
        jobType: "",
        salary: "",
        description: "",
        postedBy: user._id,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:4000/jobs", jobData, { withCredentials: true })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className=" container my-5">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Title
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        name="title"
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        company
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        name="company"
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Location
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        name="location"
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                    />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        jobType
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        name="jobType"
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        salary
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        name="salary"
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        description
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        name="description"
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                    />
                </div>
                <button className=" btn btn-info">Post job</button>
            </form>
        </div>
    );
};

export default JobPost;
