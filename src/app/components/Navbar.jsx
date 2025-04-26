import React from 'react'
import styles from '../components_css/Navbar.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function Navbar() {
    const router = useRouter();
    
    return (
        <>
            <div className={styles.logo}>
                <Image src="/image.png" alt="Login Visual" width={80} height={80} />
            </div>
            <div className={styles.searchBox}>
                <input type="text" placeholder="Search hotels" className={styles.searchInput} />
                <button className={styles.searchButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </div>
            <div className={styles.userInfo}>
                <span>User Name</span>
                <div className={styles.userAvatar}  onClick={() => router.push('/UserInfo')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
            </div>
        </>
    )
}
