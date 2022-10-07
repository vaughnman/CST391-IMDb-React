import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddReviewCard } from "./AddReviewCard";
import { HomeButton } from "./HomeButton";
import { ImdbService } from "./ImdbService";
import { Reviews } from "./Reviews";

/** Album page */
export const Album = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [album, setAlbum] = useState(null);
    const albumId = useParams().albumId;

    /** Retrieves album and rating*/
    useEffect(()=> {
        new ImdbService().getAlbum(albumId).then((response) => {
            setAlbum(response.data);
        });

        new ImdbService().getRating(albumId).then((response) => {
            if(response && response.data) setRating(response.data);
        });
    }, [albumId])

    if(!album || !albumId) 
    return (<>
        <div> Album not found! </div>
        <HomeButton/>
    </>);


    /** Redirects the user to the update page */
    const onUpdate = () => {
        navigate("/update-album/" + albumId);
    }
    
    /** Deletes the album and takes the user to the albums page */
    const onDelete = () => {
        new ImdbService().deleteAlbum(albumId).finally((response) => {
            navigate("/albums");
        });
    }

    return (
        <>
            <div className="container">
                <img src={album?.imageUrl} width="700px" height="700px" />
                <div className="container"> 
                    <h1>{album?.name}</h1>
                    <h2>{album?.band}</h2>
                    <h3>{album?.releaseDate ? "Released " + album?.releaseDate : ""}</h3>
                    <h3>Added {new Date(album?.timestampAddedMs).toDateString()}</h3>
                    <h1>{rating ? rating + "/5": ""}</h1>
                    <button onClick={() => onUpdate()}>Update Album</button>
                    <button className="deleteButton" onClick={() => onDelete()}>{"Delete Album"}</button>
                </div>

                <AddReviewCard albumId={album?.albumId}/>
                <Reviews albumId={album?.albumId}/>
            </div>
            <HomeButton />
        </>
    );
}