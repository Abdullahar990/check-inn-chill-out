"use client";
import React, { useState } from 'react';
import styles from '../CSS/addhotel.module.css';
import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Userdetails from '../components/Userdetails';


const Hotel = () => {
    const router = useRouter();
    const [hotelData, setHotelData] = useState({
        hotelName: '',
        location: '',
        price: '',
        rooms: '',
        facilities: {
            wifi: false,
            spa: false,
            food: false,
            telephone: false,
            gym: false,
            kitchen: false
        },
        thumbnailImage: null,
        hotelImages: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHotelData({
            ...hotelData,
            [name]: value
        });
    };

    const handleFacilityChange = (facility) => {
        setHotelData({
            ...hotelData,
            facilities: {
                ...hotelData.facilities,
                [facility]: !hotelData.facilities[facility]
            }
        });
    };

    const handleThumbnailUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            setHotelData({
                ...hotelData,
                thumbnailImage: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    const handleImagesUpload = (e) => {
        if (e.target.files) {
            const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
            setHotelData({
                ...hotelData,
                hotelImages: [...hotelData.hotelImages, ...newImages]
            });
        }
    };

    const removeImage = (index) => {
        const updatedImages = [...hotelData.hotelImages];
        updatedImages.splice(index, 1);
        setHotelData({
            ...hotelData,
            hotelImages: updatedImages
        });
    };

    const handleSave = () => {
        console.log("Saving hotel data:", hotelData);
        // Here you would typically send the data to an API
        alert("Hotel information saved successfully!");
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Userdetails />
                <button onClick={() => { handleSave(); router.push("owner"); }} className={styles.saveButton} >
                    Save Info
                    <svg className={styles.downloadIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Add Hotel Info</h2>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Hotel Name</label>
                    <input type="text" name="hotelName" value={hotelData.hotelName} onChange={handleInputChange} className={styles.input} placeholder="Enter hotel name" />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Location</label>
                    <input type="text" name="location" value={hotelData.location} onChange={handleInputChange} className={styles.input} placeholder="Enter hotel location" />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Price</label>
                    <input type="text" name="price" value={hotelData.price} onChange={handleInputChange} className={styles.input} placeholder="Enter price per night" />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Rooms</label>
                    <input type="number" name="rooms" value={hotelData.rooms} onChange={handleInputChange} className={styles.input} placeholder="Number of rooms available" />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Facilities provided?</label>
                    <div className={styles.facilitiesGrid}>
                        {Object.entries(hotelData.facilities).map(([facility, isChecked]) => (
                            <div key={facility} className={`${styles.facilityOption} ${isChecked ? styles.selected : ''}`} onClick={() => handleFacilityChange(facility)}>
                                <div className={styles.checkbox}>
                                    {isChecked && <span className={styles.checkmark}>✓</span>}
                                </div>
                                <span className={styles.facilityName}>
                                    {facility.toUpperCase()}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Thumbnail Image</label>
                    <div className={styles.uploadContainer}>
                        {hotelData.thumbnailImage ? (
                            <div className={styles.thumbnailPreview}>
                                <img src={hotelData.thumbnailImage} alt="Thumbnail Preview" className={styles.thumbnailImage} />
                                <button className={styles.removeButton} onClick={() => setHotelData({ ...hotelData, thumbnailImage: null })} > Remove </button>
                            </div>
                        ) : (
                            <label className={styles.uploadArea}>
                                <input type="file" accept="image/*" onChange={handleThumbnailUpload} className={styles.fileInput} />
                                <Upload size={24} />
                                <p>Click or drag file to this area to upload</p>
                            </label>
                        )}
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Hotel Images</label>
                    <div className={styles.uploadContainer}>
                        <label className={styles.uploadArea}>
                            <input type="file" accept="image/*" multipleonChange={handleImagesUpload} className={styles.fileInput} />
                            <Upload size={24} />
                            <p>Click or drag file to this area to upload</p>
                        </label>
                    </div>

                    {hotelData.hotelImages.length > 0 && (
                        <div className={styles.imagesGrid}>
                            {hotelData.hotelImages.map((image, index) => (
                                <div key={index} className={styles.imagePreview}>
                                    <img src={image} alt={`Hotel Preview ${index + 1}`} className={styles.previewImage} />
                                    <button className={styles.removeButton} onClick={() => removeImage(index)} > ✕ </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hotel;