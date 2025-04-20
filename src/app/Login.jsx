import Image from 'next/image';
import React from 'react';
import styles from './CSS/login.module.css';

export default function Login() {
    return (
        <div className={styles.background}>
            <div className={styles.foreground}>
                <Image src="/image.png" alt="Login Visual" width={274} height={239} className={styles.img} />
            </div>
        </div>
    );
}
