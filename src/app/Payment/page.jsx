"use client";
import React, { useState } from 'react';
import styles from '../CSS/payment.module.css';
import Navbar from '../components/Navbar';

const Payment = () => {
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvc, setCvc] = useState('');
    const [country, setCountry] = useState('Hong Kong SAR China');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Payment submitted');
    };

    return (
        <>
                <Navbar />
            <div className={styles.container}>
                <div className={styles.paymentContainer}>
                    <h1 className={styles.title}>Payment Details</h1>

                    <div className={styles.formContainer}>
                        <div className={styles.formInnerContainer}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>Email</label>
                                <input type="email" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="cardNumber" className={styles.formLabel}>Card number</label>
                                <div className={styles.cardNumberContainer}>
                                    <input type="text" id="cardNumber" placeholder="1234 1234 1234 1234" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className={styles.input} />
                                    <div className={styles.cardIcons}>
                                        <img src="/visa.png" alt="Visa" className={styles.cardIcon} />
                                        <img src="/mastercard.png" alt="Mastercard" className={styles.cardIcon} />
                                        <img src="/amex.png" alt="American Express" className={styles.cardIcon} />
                                        <img src="/discover.png" alt="Discover" className={styles.cardIcon} />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroupHalf}>
                                    <label htmlFor="expiration" className={styles.formLabel}>Expiration</label>
                                    <input type="text" id="expiration" placeholder="MM/YY" value={expiration} onChange={(e) => setExpiration(e.target.value)} className={styles.input} />
                                </div>

                                <div className={styles.formGroupHalf}>
                                    <label htmlFor="cvc" className={styles.formLabel}>CVC</label>
                                    <div className={styles.cvcContainer}>
                                        <input type="text" id="cvc" placeholder="CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} className={styles.input} />
                                        <button className={styles.cvcHelp}>?</button>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="country" className={styles.formLabel}>Country</label>
                                <div className={styles.selectContainer}>
                                    <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} className={styles.select}>
                                        <option value="Hong Kong SAR China">Hong Kong SAR China</option>
                                        <option value="United States">United States</option>
                                        <option value="Canada">Canada</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        {/* Add more countries as needed */}
                                    </select>
                                    <div className={styles.selectArrow}>▼</div>
                                </div>
                            </div>

                            <button type="submit" className={styles.doneButton} onClick={handleSubmit}>
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;