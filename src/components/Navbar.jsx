"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Navbar.module.css';
import { ROUTES } from '../utils/routes';

const Navbar = ({ onSaveSegment }) => {
    const router = useRouter();

    const navigateHome = () => {
        router.push('/');
    };
    const navigateToSegments = () => {
        router.push(ROUTES.segments);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo} onClick={navigateHome}>
                MyApp
            </div>
            <div className={styles.menu}>
                <span className={styles.label} onClick={navigateToSegments}>
                    Segment List
                </span>
                <span className={styles.label} onClick={onSaveSegment}>
                    Add Segment
                </span>
                <span className={styles.label} onClick={navigateHome}>
                    Home
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
