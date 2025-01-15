import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import JobList from "./components/JobList";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <Toaster />
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<JobList />} />
                <Route path="/job/:id" element={<JobDetails />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            {/* <Header />
            <JobList /> */}
        </div>
    );
}

export default App;
