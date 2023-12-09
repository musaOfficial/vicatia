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
            Homepage is empty
            </main>
          <Footer Name={"Nisa"} Surname={"Arslan"} />
        </div>
    )
} export default Homepage;