import Footer from "../ui/Footer";
import Header from "../ui/Header";
import classes from './Profile.module.css';
import { useState } from "react";
import Image from "next/image";
import LocationSVG from './../../public/svg/location.svg';
import Link from "next/link";
import asdf from '/Users/musa_/Desktop/vicatia/public/images/sitter.jpg'
function Profile(){
    const [user, setUser] = useState({
        role: "Petsitter",
        name: "Nisa",
        surname: "Arslan",
        city: "Vienna",
        profileImage: null,
        birthdate: "11.04.2006",
        gender: "m",
        phone: "+43 660 675 326 1",
        email: "babyboy@gmail.com",
        about_me: `My name is Momo Gökler and i Enjoy doing u know u know and also i have the softest fart out of all the poeple i know so yea choose me bitch.
        Also  I got a loving girlfriend Jaden baby süsi Slemeni wich helps me with the work of masturbating with foreigners pets. My dream came true and I 
        My name is Momo Gökler and i Enjoy doing u know u know and also i have the softest fart out of all the poeple i know so yea choose me bitch.
        Also  I got a loving girlfriend Jaden baby süsi Slemeni wich helps me with the work of masturbating with foreigners pets. My dream came true and I
        My name is Momo Gökler and i Enjoy doing u know u know and also i have the softest fart out of all the poeple i know so yea choose me bitch.
        Also  I got a loving girlfriend Jaden baby süsi Slemeni wich helps me with the work of masturbating with foreigners pets. My dream came true and I
        My name is Momo Gökler and i Enjoy doing u know u know and also i have the softest fart out of all the poeple i know so yea choose me bitch.
        Also  I got a loving girlfriend Jaden baby süsi Slemeni wich helps me with the work of masturbating with foreigners pets. My dream came true and I
        My name is Momo Gökler and i Enjoy doing u know u know and also i have the softest fart out of all the poeple i know so yea choose me bitch.
        Also  I got a loving girlfriend Jaden baby süsi Slemeni wich helps me with the work of masturbating with foreigners pets. My dream came true and I
        `,
        rating: 0,
        my_pets: [

        ]
    });

    return (
        <div className={classes.container}>
            <Header></Header>
            <main className={classes.main}>
                <div className={classes.row_1}>
                    <div className={classes.img_container}>
                        <Image src={asdf} objectFit='cover' alt='Profile Image' layout="fill" />
                    </div>
                    <div className={classes.user_information}>
                        <div className={classes.information_container}>
                            <div className={classes.user_pp}><span className={classes.user_name}>{user.name} {user.surname}</span><span className={classes.user_city}><LocationSVG className={classes.location_svg} /> {user.city}</span></div>
                            <div className={classes.user_role}>{user.role}</div>
                            <div className={classes.user_about_me}>About me</div>
                            <div className={classes.user_about_me_text}>{user.about_me}</div>
                        </div>
                        <Link href={"/chat"}><div className={classes.user_settings}>Chat</div></Link>
                    </div>
                </div>
                {/* ROW 2 MUSS AUFGRUND LEEREM DESIGN BEARBEITET WERDEN */}
                <div className={classes.row_2_s}>
                    <div className={classes.basic_information_container}>
                        <div className={classes.user_i}>Birthday: {user.birthdate}</div>
                        <div className={classes.user_i}>Gender: {user.gender == "m" ? "Male" : "Female"}</div> 
                        <div className={classes.user_i}>Phone: {user.phone}</div>
                        <div className={classes.user_email}>Email: {user.email}</div>
                    </div>
                </div>
                {/* BEI ROW 3 FEHLT DER AUFBAU VON RATINGS */}
                <div className={classes.row_3_s}>
                    <div className={classes.user_rating}>Rating:</div>
                </div>
            </main>
            <Footer></Footer> 
        </div>
    )
} export default Profile;