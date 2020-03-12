import React from 'react';
import { Card } from 'react-bootstrap';

function ProfileDetail({ name, username, email, address, profile_picture }) {
    return (
        <div>
            <h2>My Profile</h2>
            <Card className="mt-4">
                <Card.Img variant="top" src={profile_picture} fluid rounded />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        <h5>@{username}</h5>
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{address}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileDetail;