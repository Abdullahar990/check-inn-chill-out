import React, { useState, useEffect } from 'react';
import styles from '../components_css/userroles.module.css';
import { useRouter } from 'next/navigation';

export default function UserRoles({ role }) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(role);

    console.log('Received role prop:', role);
    console.log('Active Tab:', activeTab);

    return (
        <>
            <div className={styles.userRoles}>
                <div className={`${styles.roleTab} ${activeTab === 'guest' ? styles.activeTab : ''}`} onClick={() => { setActiveTab('guest'); router.push('UserInfo'); }}>
                    Guest
                </div>
                <div className={`${styles.roleTab} ${activeTab === 'owner' ? styles.activeTab : ''}`} onClick={() => { setActiveTab('owner'); router.push('owner'); }}>
                    Owner
                </div>
            </div>
        </>
    );
}
