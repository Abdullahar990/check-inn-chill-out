"use client";
import React, { useState } from 'react';
import styles from '../CSS/owner.module.css';
import { useRouter } from 'next/navigation';
import UserDetails from '../components/Userdetails'
import UserRoles from '../components/UserRoles';
import UserButton from '../components/UserButton';

const Owner = ({ userName, userId}) => {
    const [hotels, setHotels] = useState([
        {
            id: 1,
            image: "/Paris.png",
            username: "user Name",
            rating: 1,
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            id: 2,
            image: "/Capetown.png",
            username: "user Name",
            rating: 1,
            comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }

    ]);

    const handleAddHotel = () => {
        console.log("Add hotel clicked");
    };
    return (
        <div className={styles.userInfoContainer}>
            <div className={styles.userHeader}>
                <UserDetails />
                <UserButton content = "Add Hotel" Icon="owner"/>
            </div>
            <UserRoles role='owner'/>

            <div className={styles.commentsContainer}>
                {hotels.map(hotel => (
                    <div key={hotel.id} className={styles.commentCard}>
                        <div className={styles.commentImage}>
                            <img src={hotel.image} alt="Hotel" />
                        </div>
                        <div className={styles.commentContent}>
                            <div className={styles.commentHeader}>
                                <div className={styles.commentUser}>
                                    <div className={styles.commentUserAvatar}>
                                        <div className={styles.avatarIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <span className={styles.commentUserName}>{hotel.username}</span>
                                </div>
                                <div className={styles.ratingStars}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`${styles.star} ${star <= hotel.rating ? styles.activeStar : ''}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className={styles.commentTitle}>Comment</h3>
                            <p className={styles.commentText}>{hotel.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Owner;