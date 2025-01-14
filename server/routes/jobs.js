const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a job
router.post("/", async (req, res) => {
    const { title, company, location, jobType, salary, description, postedBy } = req.body;
    try {
        const job = new Job({ title, company, location, jobType, salary, description, postedBy });
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// apply for a job

router.post("/apply-job/:id/:jobId", async (req, res) => {
    const { id, jobId } = req.params;
    try {
        await Job.findByIdAndUpdate(jobId, { $push: { applications: id } });
        res.status(200).send("Applied successfully");
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
