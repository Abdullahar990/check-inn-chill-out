"use client";
import React from 'react';
import styles from '../CSS/editinfo.module.css';
import { useRouter } from 'next/navigation';
import Userdetails from '../components/Userdetails';

const EditInfo = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.userProfile}>
                    <Userdetails/>
                </div>
                <button className={styles.saveButton} onClick={()=> router.push('UserInfo')}>
                    Save Info
                    <svg className={styles.downloadIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className={styles.formContainer}>
                <h1 className={styles.formTitle}>Edit User Info</h1>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input type="text" className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input type="email" className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <input type="password" className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Upload Profile Picture</label>
                    <div className={styles.uploadArea}>
                        <svg className={styles.uploadIcon} width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12v9M16.5 16.5L12 12 7.5 16.5M20 16.58V19c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-2.42M16 8a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className={styles.uploadText}>Click or drag file to this area to upload</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditInfo;