import Header from '../ui/Header';
import classes from './ChatPage.module.css';
import Footer from '../ui/Footer';
import { useState } from 'react';
function ChatPage(){

    

    return (
        <div className={classes.container}>
            <Header></Header>
            <main className={classes.main}>
               
            </main>
            <Footer></Footer>
        </div>
    )
} export default ChatPage;