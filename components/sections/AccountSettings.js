import { useState } from 'react';
import classes from './AccountSettings.module.css'
import Link from 'next/link';
function AccountSettings({}){

    const [user, setUser] = useState({
        phone_number: "+43 666 723728321",
        email: "joeisaverycoolguy@gmail.com",
        password: "ÖKJFSDouiwerudsfsf!)("
    })

    const [currentTel, setCurrentTel] = useState("");
    const [currentEmail, setCurrentEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");

    function handleTelChange(e){
        setCurrentTel(e.target.value);
    }

    function handleEmailChange(e){
        setCurrentEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setCurrentPassword(e.target.value)
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>Account Settings</div>
            <div className={classes.section}>
                <div className={classes.section_desc}>Current Phone nr.</div>
                <div className={classes.phone_number}>{user.phone_number}</div>
                <div className={classes.changer_container}>
                    <label className={classes.label}>New Phone nr.</label>
                    <div className={classes.changer}>
                        <input
                            type="tel"
                            className={classes.input}
                            id={`tel`}
                            name={`tel`}
                            value={currentTel}
                            onChange={handleTelChange}
                            required
                        />
                        <div className={classes.save_changes}>Save changes</div>
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <div className={classes.section_desc}>Current email</div>
                <div className={classes.phone_number}>{user.email}</div>
                <div className={classes.changer_container}>
                    <label className={classes.label}>New email.</label>
                    <div className={classes.changer}>
                        <input
                            type="email"
                            className={classes.input}
                            id={`email`}
                            name={`email`}
                            value={currentEmail}
                            onChange={handleEmailChange}
                            required
                        />
                        <div className={classes.save_changes}>Save changes</div>
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <div className={classes.changer_container}>
                <label className={classes.label}>Current password</label>
                    <input
                        type="password"
                        className={classes.input}
                        id={`passsword`}
                        name={`password`}
                        value={currentPassword}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className={classes.changer_container}>
                <label className={classes.label}>New password</label>
                    <input
                        type="password"
                        className={classes.input}
                        id={`passsword`}
                        name={`password`}
                        value={currentPassword}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className={classes.changer_container}>
                    <label className={classes.label}>Confirm new password</label>
                    <div className={classes.changer}>
                        <input
                            type="password"
                            className={classes.input}
                            id={`password`}
                            name={`password`}
                            value={currentEmail}
                            onChange={handleEmailChange}
                            required
                        />
                        <div className={classes.save_changes}>Save changes</div>
                    </div>
                </div>
            </div>
            <Link href="/delete-account"><div className={classes.delete_acc}>Delete Account</div></Link>
            <div className={classes.save_button}>Finish</div>
        </div>
    )
} export default AccountSettings;