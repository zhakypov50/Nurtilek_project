import React from 'react';
import InTurn from "../../components/pagination/pagination";
import styles from "./css/aboutPage.module.css"

function AboutPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <InTurn/>
            </div>
        </div>
    );
}

export default AboutPage;