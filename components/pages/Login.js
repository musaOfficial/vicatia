import classes from './Login.module.css'
import Logo from './../../public/images/logo.png'
import Paw from './../../public/images/paw.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
function Login(){

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

    // Mit errMsg kann man über dem Button eine Error Nachricht anzeigen.
    const [errMsg, setErrMsg] = useState("");

    async function onSubmit(){
        handleErrors();
    }

    const [state, setState] = useState({
        password: "",
        email: "",
    })

    function handleChange(){
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
        console.log(state)
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
            <div className={classes.signupas}>Login</div>
            <form onSubmit={onSubmit} className={classes.form}>
            <div className={classes.relative}>
                <input 
                    type='email'
                    name='email'
                    value={state.email}
                    onChange={handleChange}
                    className={classes.input} 
                    placeholder='Email'
                    required
                    maxLength={20}
                />
                </div>
                <div className={classes.relative}>
                <input 
                    type='password'
                    name='password'
                    value={state.password}
                    onChange={handleChange}
                    className={classes.input} 
                    placeholder='Password'
                    required
                    maxLength={20}
                />

                </div>
                <div className={classes.relative}>
                    <div className={classes.error}>{errMsg}</div>
                    <button className={classes.button} type='submit'>Login</button>
                </div>
            </form>
            <div className={classes.existingacc}>Need an account? <Link href={"/signup"}><span className={classes.underline}>Register</span></Link></div>
        </div>

    </div>
    )
} export default Login;