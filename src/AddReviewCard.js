import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImdbService } from "./ImdbService";

/** Card for Adding Reviews */
export const AddReviewCard = (props) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [body, setBody] = useState("");

    /** Adds review */
    const onSubmit = () => {
        new ImdbService().addReview({
            username: username,
            title: title,
            rating: rating,
            body: body,
            albumId: props.albumId
        }).finally((response) => {
            navigate(0);
        });
    }

    
    return (
        <div className="card">
    
            <div>
                <h2>Add Review</h2>
                
                <label>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" />

                <label> Title </label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" />
                
                <label> Rating </label>
                <input type="number" min="0" max="5" onChange={(e) => setRating(e.target.value)} />

                <textarea onChange={(e) => setBody(e.target.value)} style={{width: "100%", height: "100px"}} />

                <button onClick={() => onSubmit()} disabled={!rating}>
                    Add
                </button>
            </div>

        </div>
    );
}