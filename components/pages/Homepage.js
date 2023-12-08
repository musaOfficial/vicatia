import { useState } from 'react';
import Header from '../ui/Header';
import classes from './Homepage.module.css';
import Image from 'next/image';
import ExamplePic from './../../public/images/paw.png'
import Footer from '../ui/Footer';
function Homepage(){
    const [signedIn, setSignedIn] = useState(false);
    // signin = anmelden
    // signup = registrieren
    return (
        <div className={classes.container}>
          <Header signedIn={signedIn} profilePic={ExamplePic} Name={"Nisa Arslan"}/>
          <main className={classes.main}>
                {isOwner == false ? (
                    <div className={classes.p_container}>
                        <div className={classes.page_title}>Please give information about your services for the most qualitative matchmaking</div>
                        <div className={classes.p_content}>
                            <div className={classes.p_column_1}>
                                
                            </div>
                        </div>
                    </div>
                ) : ""}
            </main>
          <Footer Name={"Nisa"} Surname={"Arslan"} />
        </div>
    )
} export default Homepage;