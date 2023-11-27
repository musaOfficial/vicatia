import classes from './Signup.module.css'
import Logo from './../../public/images/logo.png'
import Paw from './../../public/images/paw.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
function Signup(){

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    var width = 1000;

    if(typeof window != 'undefined'){
        const [widths, setWidth]   = useState(window.innerWidth);
        const [heights, setHeight] = useState(window.innerHeight);
        const updateDimensions = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        useEffect(() => {
            window.addEventListener("resize", updateDimensions);
            return () => window.removeEventListener("resize", updateDimensions);
        }, []);
        width = widths;
    }
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <Image src={Logo} draggable="false" alt='Logo'/>
            </div>
            {width <= 980 && <div className={classes.reserveleft}></div>}
            {width > 980 && <div className={classes.left}>
                <div className={classes.heading}>Welcome Page</div>
                <div className={classes.description}>Sign up to<br></br>continue access</div>
                <div className={classes.paw}>
                    <Image src={Paw} alt='Paw Icon' />
                </div>
            </div>}
            <div className={classes.right}>
                <div className={classes.signupas}><span>Sign up</span><span>as</span></div>
                <Link href={"signup/as_petowner"}><div className={classes.button}>Pet Owner</div></Link>
                <div className={classes.or}>OR</div>
                <Link href={"signup/as_petsitter"}><div className={classes.button}>Pet Sitter</div></Link>
                <div className={classes.existingacc}>Already have an account? <Link href={"/login"}><span className={classes.underline}>Login</span></Link></div>
            </div>
  
        </div>
    )
} export default Signup;