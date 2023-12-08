import Header from '../ui/Header';
import classes from './ChatPage.module.css';
import Footer from '../ui/Footer';
import { useState } from 'react';
function ChatPage(){

    const [contacts, setContacts] = useState([
        {
            id: "qpeourqwkjasdfj",
            room: "123",
            img: null,
            name: "Livia Arslan",
        },
        {
            id: "qpeourqwkjasdfsdfj",
            room: "12343",
            img: null,
            name: "Musa Arslan",
        },
        {
            id: "qpeousdfrqwkjasdfj",
            room: "123423",
            img: null,
            name: "Nisa Arslan",
        },
        {
            id: "qpeourqwkjassdfsdfdfj",
            room: "122343",
            img: null,
            name: "Haris Arslan",
        },
        {
            id: "qpsdfsdfsdourqwkjasdfj",
            room: "14323",
            img: null,
            name: "Yeter Arslan",
        },
        {
            id: "qpeosdfsdfsdfwkjasdfj",
            room: "1423423",
            img: null,
            name: "Nuh Arslan",
        },
    ])

    const [search, setSearch] = useState("");

    const [selectedUser, setSelectedUser] = useState("");

    return (
        <div className={classes.container}>
            <Header></Header>
            <div className={classes.content}>
                <div className={classes.contact_list}>
                <input type='text' onChange={(e) => setSearch(e.target.value)} className={classes.input} />
                    {contacts.map((item, index) => {
                        return <div className={classes.contact_container} key={index}>{item.name}</div>
                    })}
                </div>
                <div className={classes.chat_container}>
                    <div className={classes.chat_header}></div>
                    <div className={classes.chat_area}></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
} export default ChatPage;