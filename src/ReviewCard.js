import { useNavigate } from "../node_modules/react-router-dom/dist/index";
import { ImdbService } from "./ImdbService";

/** Card for displaying Review info */
export const ReviewCard = (props) => {
    const navigate = useNavigate();
    const review = props.review;

    /** Deletes review */
    const onDelete = () => {
        new ImdbService().deleteReview(review.reviewId).finally((response) => {
            navigate(0);
        });
    };

    return (
        <>
            <div className="card">
                <div>        
                    <h3>Username: {review?.username}</h3>

                    <div>Title: {review?.title}</div>

                    <div>Rating: {review?.rating}</div>

                    <div>{review?.body}</div>
                    
                    <button className="deleteButton" onClick={()=>onDelete()}>Delete Review</button>
                </div>
            </div>
        </>
    );
}