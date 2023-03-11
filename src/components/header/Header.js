import React, {useEffect} from 'react';
import NavBar from "./navBar/NavBar";
import styles from "./css/header.module.css"
import {useDispatch} from "react-redux";
import {getArticles} from "../../redux/slices/slices";


function Header() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticles())
    })
    return (
        <>
            <div className={styles.container}>
                <NavBar></NavBar>
                <input type="text" placeholder="search" className={styles.placeholder}/>
            </div>
        </>
    );
}

export default Header;