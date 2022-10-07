import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HomeButton } from "./HomeButton";
import { ImdbService } from "./ImdbService";

/** Add album page, reused for updating albums */
export const AddAlbum = () => {
    const albumId = useParams().albumId;
    const navigate = useNavigate();

    const [imageUrl, setImageUrl] = useState("");
    const [name, setName] = useState("");
    const [band, setBand] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [timestampAddedMs, setTimestampAddedMs] = useState(undefined);

    /** Retrieves existing album if album id is present */
    useEffect(() => {
        if (albumId) {
            new ImdbService().getAlbum(albumId).then(album => {
                console.log(album)
                setImageUrl(album?.data?.imageUrl);
                setName(album?.data?.name);
                setBand(album?.data?.band);
                setReleaseDate(album?.data?.releaseDate);
                setTimestampAddedMs(album?.data?.timestampAddedMs);
            });
        }
    }, [albumId]);

    /** Saves Album */
    const onSubmit = () => {
        new ImdbService().saveAlbum({
            imageUrl,
            name,
            band,
            releaseDate,
            timestampAddedMs, 
            albumId
        }).finally(() => {
            navigate("/albums");
        });
    }


    return (
        <>  
            <div className="column">
                <img src={imageUrl} width="500px" height="500px"/>

                <div>
                    <label> Image Url </label>
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>

                <div>
                    <label> Name </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label> Band </label>
                    <input value={band} onChange={(e) => setBand(e.target.value)} />
                </div>

                <div>
                    <label> Release Date </label>
                    <input value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
                </div>

                <button onClick={()=> onSubmit()} disabled={!name || !band}> 
                    Submit 
                </button>
            </div>

            <br/>

            <HomeButton/>
        </>
    );
}