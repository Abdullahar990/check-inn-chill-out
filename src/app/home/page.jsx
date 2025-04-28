"use client";
import React from 'react';
import Categorybar from '../components/Categorybar';
import styles from '../CSS/home.module.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';

const Home = () => {
    const destinations = [
        {
            id: 1,
            location: 'Cape Town, South Africa',
            price: '$113 night',
            rating: 1,
            image: '/Capetown.png'
        },
        {
            id: 2,
            location: 'Sao Paulo, Brazil',
            price: '$80 night',
            rating: 3,
            image: '/Saopaulo.png'
        },
        {
            id: 3,
            location: 'Paris, France',
            price: '$52 night',
            rating: 3,
            image: '/Paris.png'
        },
        {
            id: 4,
            location: 'Cape Town, South Africa',
            price: '$113 night',
            rating: 1,
            image: '/Capetown.png'
        },
        {
            id: 5,
            location: 'Sao Paulo, Brazil',
            price: '$80 night',
            rating: 3,
            image: '/Saopaulo.png'
        },
        {
            id: 6,
            location: 'Paris, France',
            price: '$52 night',
            rating: 3,
            image: '/Paris.png'
        }
    ];
    const router = useRouter();
    const handleCategoryClick = (category) => {
        console.log("Category clicked:", category);
        router.push(`/home/${category}`);
    };
    return (

        <div className={styles.container}>
            <Navbar />
            <Categorybar onCategoryClick={handleCategoryClick} />

            <div className={styles.destinationsGrid}>
                {destinations.map((destination) => (
                    <div key={destination.id} className={styles.destinationCard}>
                        <div className={styles.cardImage}>
                            <Image src={destination.image} alt={destination.location} layout="fill" objectFit="cover" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ5N1EZEAAAAABJRU5ErkJggg==" />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.location}>{destination.location}</h3>
                            <p className={styles.price}>{destination.price}</p>
                            <div className={styles.ratingStars}>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < destination.rating ? styles.starFilled : styles.starEmpty}>★</span>
                                ))}
                            </div>
                            <div className={styles.viewDetail}>
                                <div className={styles.viewContent}>
                                    View Details
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;