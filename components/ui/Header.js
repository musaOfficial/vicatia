import classes from './Header.module.css'
import Logo from '../uielements/logo';
import Link from 'next/link';
import Image from 'next/image';
import Cart from './../../public/svg/cart.svg';
import Sitter from './../../public/svg/sitter.svg';
import Chat from './../../public/svg/chat.svg';
import { useState } from 'react';
import { useEffect } from 'react';
function Header({ signedIn, Name, profilePic }){

    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }
    useState(() => {
        console.log(menuOpen)
    }, [menuOpen])
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <div className={classes.logo}><Link href={"#"}><Logo /></Link></div>
                <div className={`${classes.menu_btn} ${menuOpen ? classes.open : ''}`} onClick={handleMenuClick}>
                    <div className={classes.menu_btn_burger}></div>
                </div>
                <div className={classes.links}>
                    <Link href={"/petsitters"}>
                    <div className={classes.column}>
                        <div className={classes._text}>Pet sitters</div>
                        <div className={classes.svg}><Sitter className={classes.self_svg} /></div> 
                    </div>
                    </Link> 
                    <Link href={"/chat"}>
                        <div className={classes.column}>
                            <div className={classes._text}>Chat</div>
                            <div className={classes.svg}><Chat className={classes.self_svg} /></div> 
                        </div>
                    </Link>
                    <Link href={"/myprofile"} >
                    <div className={classes.column}>
                        <div className={classes.account_name}>{ "Nisa Arslan" }</div>
                        <div className={classes.account}><Image src={profilePic} alt='Profile Picture' /></div>
                    </div>
                    </Link>
                </div>
            </header>
            <menu className={`${menuOpen ? classes.openMenu : classes.closed}`}>
                <div className={classes.menu_container}>
                    <div className={classes.list_item_1}>
                        <div className={classes.column}>
                            <div className={classes._text}>Pet sitters</div>
                            <div className={classes.svg}><Sitter className={classes.self_svg} /></div> 
                        </div>
                    </div>
                    <div className={classes.list_item_2}>
                        <div className={classes.column}>
                            <div className={classes._text}>Chat</div>
                            <div className={classes.svg}><Chat className={classes.self_svg} /></div> 
                        </div>
                    </div>
                </div>
            </menu>
        </div>
    )
} export default Header;