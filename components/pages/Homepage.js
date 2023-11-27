import { useState } from 'react';
import Header from '../ui/Header';
import classes from './Homepage.module.css';
import Image from 'next/image';

function Homepage(){
    const [signedIn, setSignedIn] = useState(false);
    // signin = anmelden
    // signup = registrieren
    return (
        <div className={classes.container}>
          <Header signedIn={signedIn}/>
        </div>
    )
} export default Homepage;