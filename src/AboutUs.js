import { HomeButton } from "./HomeButton"

/** About Us page */
export const AboutUs = () => {
    return (
        <>
            <div className="page">

                <h2>Our Goal</h2>
                <p>
                IMDb aims to cultivate a community of music lovers who can share their opinions and ratings of albums.
                </p>

                <br/>

                <h2> Contact Us </h2>

                <p>
                For support, send an email to: VBauer1@my.gcu.edu
                </p>
            </div>

            <br/>

            <HomeButton />
        </>      
    );
}