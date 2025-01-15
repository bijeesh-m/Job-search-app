import React, { useEffect, useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    const userId = localStorage.getItem("userId");

    const navigate = useNavigate();

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
                    <div onClick={() => navigate(`/job/${job._id}`)} key={job._id} class="card w-75 mb-2">
                        <div class="card-body">
                            <h5 class="card-title">{job.title}</h5>
                            <p class="card-text">{job.description}</p>
                        </div>
                        <div class="card-footer text-body-secondary">2 days ago</div>
                    </div>
                );
            })}
        </div>
    );
};

export default JobList;
