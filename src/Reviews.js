import { useEffect, useState } from "react";
import { ImdbService } from "./ImdbService";
import { ReviewCard } from "./ReviewCard";

/** Reviews list */
export const Reviews = (props) => 
{
    const [reviews, setReviews] = useState([]);

    /** Retrieves all reviews for album id */
    useEffect(() => {
        new ImdbService().getReviews(props.albumId).then((response) => {
            setReviews(response.data);
        });
    }, [props.albumId])

    return (
        <>
            {reviews.map((review) => (
                <ReviewCard review={review} />
            ))}
        </>
    );
}