const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    salary: { type: Number },
    description: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    applications: [
        {
            jobSeekerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            status: { type: String, default: 'Pending' },
            appliedAt: { type: Date, default: Date.now },
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
