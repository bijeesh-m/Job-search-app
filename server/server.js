const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const jobRoute = require("./routes/jobs");

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

dotenv.config();
connectDB();

app.use("/auth", require("./routes/auth"));
app.use("/jobs", jobRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
