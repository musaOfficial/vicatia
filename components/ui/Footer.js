import classes from './Footer.module.css'
import Mail from './../../public/svg/mail.svg';
import Phone from './../../public/svg/phone.svg';
import Link from 'next/link';
function Footer({ Name, Surname}){
    return (
        <div className={classes.container}>
            Copyright © 2023 - Vicatias | All Rights Reserved ®
            <div className={classes.small}>You are logged in as {Name} {Surname} (<Link href={"/logout"}><span className={classes.logout}>{'Log Out'}</span></Link>)</div>
        </div>
    )

} export default Footer;