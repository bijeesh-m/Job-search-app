import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState({});

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        axios
            .get(`http://localhost:4000/jobs/${id}`)
            .then((res) => {
                console.log(res);
                setJob(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleApply = (jobId) => {
        axios
            .post(`http://localhost:4000/jobs/apply-job/${userId}/${jobId}`)
            .then((res) => {
                console.log(res);
                toast.success("Applied successfully!");
                // window.location.replace("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1 className=" m-4">Job details</h1>
            <div className=" container p-3">
                <h3>{job.title}</h3>
                <h6>Company : {job.company}</h6>
                <h3>Job description :</h3>
                <p>{job.description}</p>
                <h3>Salary: {job.salary}</h3>
                <button onClick={() => handleApply(job._id)} className=" btn btn-warning mt-3">
                    Apply
                </button>
            </div>
        </div>
    );
};

export default JobDetails;
