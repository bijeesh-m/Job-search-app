import React, { useEffect, useState } from "react";

import axios from "axios";

const JobList = () => {
    const [jobs, setJobs] = useState([]);

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

    return (
        <div className=" m-4">
            {jobs.map((job) => {
                return (
                    <div key={job._id} class="card w-75 mb-2">
                        <div class="card-body">
                            <h5 class="card-title">{job.title}</h5>
                            <p class="card-text">{job.description}</p>
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Apply
                            </button>
                        </div>
                        <div class="card-footer text-body-secondary">2 days ago</div>

                        <div
                            class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                                            Apply for a job
                                        </h1>
                                        <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div class="modal-body">...</div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="button" class="btn btn-primary">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default JobList;
