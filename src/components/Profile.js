import React from 'react';
import './Profile.css';

function Profile() {
    const age = 28;
    const location = 'Lagos, Nigeria';
    const status = 'Student - Learning React';

    return (
    <div className="profile-container">
        <h2 className="profile-title">My Profile</h2>
        <div className="profile-info">
        <p className="profile-item">
        <span className="label">Age:</span> {age}
        </p>
        <p className="profile-item">
        <span className="label">Location:</span> {location}
        </p>
        <p className="profile-item">
        <span className="label">Status:</span> {status}
        </p>
    </div>
    </div>
    );
}

export default Profile;