"use client"
import React from 'react';
import styles from '../CSS/userinfo.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const UserInfo = ({ userName, userId, isOwner }) => {
    const [activeTab, setActiveTab] = useState('guest');
    const comments = [
        {
            id: 1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            rating: 1,
            image: "/Paris.png"
        },
        {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            rating: 1,
            image: "/Capetown.png"
        },
        {
            id: 3,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            rating: 1,
            image: "/Saopaulo.png"
        }
    ];
    const router = useRouter();
    return (
        <div className={styles.userInfoContainer}>
            <div className={styles.userHeader}>
                <div className={styles.userAvatar}>
                    <div className={styles.avatarIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                </div>
                <div className={styles.userDetails}>
                    <h2 className={styles.userName}>{userName || "User Name"}</h2>
                    <span className={styles.userId}>{userId || "User Id"}</span>
                </div>
                <div className={styles.userActions}>
                    <button className={styles.editButton}>
                        Edit Info
                        <span className={styles.plusIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div className={styles.userRoles}>
                <div className={`${styles.roleTab} ${activeTab === 'guest' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('guest')}>
                    Guest
                </div>
                <div className={`${styles.roleTab} ${activeTab === 'owner' ? styles.activeTab : ''}`}
                    onClick={() => {setActiveTab('owner');router.push('owner')}}>
                    Owner
                </div>
            </div>

            <div className={styles.commentsContainer}>
                {comments.map(comment => (
                    <div key={comment.id} className={styles.commentCard}>
                        <div className={styles.commentImage}>
                            <img src={comment.image} alt="Property" />
                        </div>
                        <div className={styles.commentContent}>
                            <h3 className={styles.commentTitle}>Comment</h3>
                            <p className={styles.commentText}>{comment.text}</p>
                            <div className={styles.ratingStars}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`${styles.star} ${star <= comment.rating ? styles.activeStar : ''}`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserInfo;