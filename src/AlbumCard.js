import { useEffect, useState } from "react";
import { useNavigate } from "../node_modules/react-router-dom/dist/index"
import { ImdbService } from "./ImdbService";

/** Card for displaying album info */
export const AlbumCard = (props) => {
    var [rating, setRating] = useState(0);
    var navigate = useNavigate();
    var album = props.album;

    /** Retrieves rating */
    useEffect(() => {
        new ImdbService().getRating(album.albumId).then((response) => {
            if(response && response.data) setRating(response.data);
        });
    }, [album?.albumId])
    

    return(
        <div onClick={() => navigate(`/album/${album?.albumId}`)} className="card">
            <img className="cardElement" src={album?.imageUrl} width="250px" height="250px" />
            <div style={{textAlign: "left", margin: 0}}> 
                <h1 className="cardElement">{album.name}</h1>
                <h2 className="cardElement">{album.band}</h2>
                <h1 className="cardElement">{rating ? rating + "/5": ""}</h1> 
            </div>
        </div>
    )
}