import React from 'react';
import styles from './css/footer.module.css'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h2><a href="/">Shop</a></h2>
                    <div className={styles.social}>
                        <h3><a href="/">Instagram</a></h3>
                        <h3><a href="/">Twitter</a></h3>
                        <h3><a href="/">Meta</a></h3>
                    </div>
                </div>
            </div>
    );
}

export default Footer;