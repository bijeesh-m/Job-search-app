import React from "react";

const Profile = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            {/* Profile Picture */}
                            
                            {/* Name */}
                            <h3 className="card-title mb-3">{user.name}</h3>
                            {/* Bio */}
                            <p className="text-muted">
                                A passionate developer specializing in web development and design. Always eager to learn new technologies and create amazing user experiences.
                            </p>
                            <hr />
                            {/* Additional Info */}
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6>Email</h6>
                                    <p className="text-muted">{user.email}</p>
                                </div>
                                <div>
                                    <h6>Phone</h6>
                                    <p className="text-muted">+1 (123) 456-7890</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6>Location</h6>
                                    <p className="text-muted">New York, USA</p>
                                </div>
                                <div>
                                    <h6>Joined</h6>
                                    <p className="text-muted">January 2020</p>
                                </div>
                            </div>
                            {/* Buttons */}
                            <div className="mt-3">
                                <button className="btn btn-primary me-2">Edit Profile</button>
                                <button className="btn btn-secondary">View Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

