import React, { useEffect, useState } from "react";
import { PhotoContainer } from "../components/PhotoContainer";
import { StoriesContainer } from "../components/StoriesContainer";
import { Navbar } from "../components/Navbar";
import { Navigate } from "react-router-dom";
import "../App.css";

export const Home = ({ user }) => {
    const [photos, setPhotos] = useState([]);

    const fetchPhotos = async () => {
        try {
            const response = await fetch("https://picsum.photos/v2/list");
            const data = await response.json();
            setPhotos(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => fetchPhotos(), []);

    return (
        <div className="home">
            {!user && <Navigate to="/" />}
            <Navbar />
            <div id="content">
                <div id="left-side">
                    <div id="stories-page">
                        {photos.slice(0, 7).map((item, index) => (
                            <StoriesContainer photo={item} id={index} />
                        ))}
                    </div>
                    <div id="photo-page">
                        {photos.map((item, index) => (
                            <PhotoContainer photo={item} id={index} />
                        ))}
                    </div>
                </div>
                <div id="right-side">
                    <div id="profile-info">
                        <img src="#" alt="your profile picture" />
                        <p>username</p>
                        <p>your full name</p>
                        <a href="#">Switch</a>
                    </div>
                    <div id="suggestions">
                        <div className="suggestions-profile">
                            <p></p>
                            <p></p>
                            <a href=""></a>
                        </div>
                        <div className="suggestions-profile">
                            <p></p>
                            <p></p>
                            <a href=""></a>
                        </div>
                        <div className="suggestions-profile">
                            <p></p>
                            <p></p>
                            <a href=""></a>
                        </div>
                        <div className="suggestions-profile">
                            <p></p>
                            <p></p>
                            <a href=""></a>
                        </div>
                        <div className="suggestions-profile">
                            <p></p>
                            <p></p>
                            <a href=""></a>
                        </div>
                    </div>
                    <ul>
                        <li>About</li>
                        <li>Help</li>
                        <li>Press</li>
                        <li>API</li>
                        <li>Jobs</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Locations</li>
                        <li>Top accounts</li>
                        <li>Hashtags</li>
                        <li>Language</li>
                    </ul>
                    <p>© 2022 FAUXSTAGRAM FROM ARW</p>
                </div>
            </div>
        </div>
    );
};
