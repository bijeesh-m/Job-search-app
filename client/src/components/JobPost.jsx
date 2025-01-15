import React, { useState } from "react";

const JobPost = () => {
    const [jobData, setJobData] = useState({
        title: "",
        company: "",
        location: "",
        jobType: "",
        salary: "",
        description: "",
    });

    return (
        <div>
            <form>
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
            </form>
        </div>
    );
};

export default JobPost;
