import React from 'react';
import Slider from "../../components/slider/slider";
import styles from "./css/mainPage.module.css"

function MainPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Slider/>
            </div>
        </div>
    );
}

export default MainPage;