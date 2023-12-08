import classes from './MyProfile.module.css'
import Logo from './../../public/images/logo.png'
import Paw from './../../public/images/paw.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import { useRouter } from 'next/router'
import AddPhotoSVG from './../../public/svg/addphoto.svg';
import { useRef } from 'react'
import { uploadImage, convertToMongoDBFormat } from '../../utils/imageUtils'
import LocationSVG from './../../public/svg/location.svg'

function MyProfile() {
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
            <Header />
                <main className={classes.main}>
                    <div className={classes.row_1}>
                        <div className={classes.img_container}>
                            {user.profileImage ? <Image src={ProfileImage} objectFit='cover' alt='Profile Image' /> : <div className={classes.img_placeholder}><AddPhotoSVG className={classes.svg_placeholder} /></div>}
                        </div>
                        <div className={classes.user_information}>
                            <div className={classes.information_container}>
                                <div className={classes.user_pp}><span className={classes.user_name}>{user.name} {user.surname}</span><span className={classes.user_city}><LocationSVG className={classes.location_svg} /> {user.city}</span></div>
                                <div className={classes.user_role}>{user.role}</div>
                                <div className={classes.user_about_me}>About me</div>
                                <div className={classes.user_about_me_text}>{user.about_me}</div>
                            </div>
                            <Link href={"/settings"}><div className={classes.user_settings}>Settings</div></Link>
                        </div>
                    </div>
                    { user.role === "Petowner" ? <div className={classes.row_2}>
                        <div className={classes.user_pets_title}>My pets</div>
                        <div className={classes.user_pets}>
                            {user.my_pets.map((index, key) => {
                                return
                            })}
                        </div>
                    </div> : <div className={classes.row_2_s}>
                        <div className={classes.basic_information_container}>
                            <div className={classes.user_i}>Birthday: {user.birthdate}</div>
                            <div className={classes.user_i}>Gender: {user.gender == "m" ? "Male" : "Female"}</div> 
                            <div className={classes.user_i}>Phone: {user.phone}</div>
                            <div className={classes.user_email}>Email: {user.email}</div>
                        </div>
                        <div className={classes.information_container_s}>
                        Access<Link href={"/settings"} className={classes.link}>settings</Link>{"t"}o provide information and enhance your visibility to others!
                        </div>
                    </div>}
                    { user.role === "Petowner" ? <div className={classes.row_3}>
                        <div className={classes.explanation_text}>
                            Visit<Link href={"/settings"}><span className={classes.link}>settings</span></Link>to input information about your pets and preferences, ensuring optimal relevance in the matchmaking process!
                        </div>
                    </div> : <div className={classes.row_3_s}>
                        <div className={classes.user_rating}>Rating:</div>
                    </div>}
                </main>
            <Footer />
        </div>
    );
}

export default MyProfile;