import React from 'react'
import styles from '../components_css/userdetails.module.css'

export default function Userdetails({ userName, userId }) {
    return (
        <>
            <div className={styles.userProfile}>
                <div className={styles.userAvatar}>
                    <div className={styles.avatarIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginleft: '5px' }}>
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                </div>
                <div className={styles.userDetails}>
                    <h2 className={styles.userName}>{userName || "User Name"}</h2>
                    <span className={styles.userId}>{userId || "User Id"}</span>
                </div>
            </div>
        </>
    )
}
