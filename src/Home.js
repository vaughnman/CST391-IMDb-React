import React from "react"
import { useNavigate } from "react-router-dom";

/** Home page */
export const Home = () => {
    var navigate = useNavigate();
    return (
        <React.Fragment>
            <br/>

            <img src="https://i.imgur.com/aH0Vc8o.png" alt="imdb-logo" width="400" height="400"/>

            <h1>
                Welcome to IMDb!
            </h1>

            <div>
                <button onClick={() => navigate("/albums")}> View Albums </button>
                <button onClick={() => navigate("/add-album")}> Add an Album </button>
            </div>

            <div>
                <button onClick={() => navigate("/about-us")} > About Us </button>
            </div>
        </React.Fragment>
    );
}