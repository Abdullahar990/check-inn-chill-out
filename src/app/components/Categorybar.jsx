'use client';
import React from 'react';
import styles from '../components_css/Category_bar.module.css';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function Categorybar({ onCategoryClick }) {
    const categoryIcons = [
        { id: 1, name: 'bed', src: '/bed.png', alt: 'Accommodation' },
        { id: 2, name: 'landmark', src: '/landmark.png', alt: 'Landmarks' },
        { id: 3, name: 'beach', src: '/beach.png', alt: 'Beaches' },
        { id: 4, name: 'food', src: '/food.png', alt: 'Food & Dining' },
        { id: 5, name: 'house', src: '/house.png', alt: 'Vacation Homes' },
        { id: 6, name: 'pool', src: '/pool.png', alt: 'Pools' },
        { id: 7, name: 'hiking', src: '/hiking.png', alt: 'Hiking' },
        { id: 8, name: 'deals', src: '/deals.png', alt: 'Special Deals' }
    ];

    const params = useParams();
    const selectedCategory = params.categories;
    return (
        <div className={styles.categoryBar}>
            <div className={styles.categoryScroll}>
                {categoryIcons.map((icon) => (
                    <div key={icon.id} className={`${styles.categoryItem} ${selectedCategory === icon.name ? styles.active : ''}`} onClick={() => onCategoryClick(icon.name)}>
                        <div className={styles.categoryImageContainer}>
                            <Image src={icon.src} alt={icon.alt} width={24} height={24} className={styles.categoryIcon} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
