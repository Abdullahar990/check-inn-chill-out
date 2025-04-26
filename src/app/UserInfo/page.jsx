"use client"
import React from 'react';
import styles from '../CSS/userinfo.module.css';
import UserDetails from '../components/Userdetails';
import UserRoles from '../components/UserRoles';
import UserButton from '../components/UserButton';

const UserInfo = ({ userName, userId }) => {
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
    
    return (
        <div className={styles.userInfoContainer}>
            <div className={styles.userHeader}>
                <UserDetails/>
                <UserButton content="Edit Info" Icon="User" />
            </div>
            <UserRoles role='guest'/>
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