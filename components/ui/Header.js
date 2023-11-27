import classes from './Header.module.css'
import Logo from '../uielements/logo';
import Link from 'next/link';
function Header({ signedIn }){
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <div className={classes.left}>
                    <div className={classes.logo}><Logo /></div>
                </div>
                <div className={classes.right}>
                    {signedIn == false && <div className={classes.signfield}>
                            <Link href={"/signup"}><div className={classes.sign}>Sign up</div></Link>
                            <Link href={"/login"}><div className={classes.sign}>Sign in</div></Link>
                        </div>}
                </div>
            </header>
        </div>
    )
} export default Header;