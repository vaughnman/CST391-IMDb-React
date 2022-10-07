import { useEffect, useState } from "react";
import { AlbumCard } from "./AlbumCard";
import { HomeButton } from "./HomeButton";
import { ImdbService } from "./ImdbService";

/** Displays all albums */
export const Albums = () => {
    const [albums, setAlbums] = useState([]);

    /** Retrieves all albums */
    useEffect(() => {
        new ImdbService().getAllAlbums().then((response) => {
            console.log(response);
            setAlbums(response.data);
        });
    }, []);

    return (
        <>
            <div className="container">
                {albums.map((album) => (
                    <AlbumCard key={album.albumId} album={album}></AlbumCard>
                ))}
            </div>
            
            {albums.length == 0 && (
                <>
                    <br/>
                    <div> No albums added yet! </div>
                </>
            )}

            <HomeButton />
        </>
    );
}