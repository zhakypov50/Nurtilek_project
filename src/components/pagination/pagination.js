import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from "./css/pagination.css"
import {useDispatch, useSelector} from "react-redux";
import {articlesSelect, getArticles, loadArticlesSelect} from "../../redux/slices/slices";
import {useEffect} from "react";
import {CircularProgress} from "@mui/material";

export default function BasicPagination() {
    const articles = useSelector(articlesSelect)
    const load = useSelector(loadArticlesSelect)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getArticles())
    }, [dispatch])
    return (
        <div>
            {
                !load
                    ?
                    articles.slice(0,10).map(i =>(
                <Stack spacing={2}>
                    <Pagination count={10} color="primary" />
                    <div>
                        <img style={{
                            objectFit: 'contain'
                        }} src={i?.image} alt="" className={styles.photo}/>
                    </div>
                    <p className={styles.rec}>{i?.title}</p>
                </Stack>
                    ))
                    :
                    <div></div>
            }
            :
            <div>
                <CircularProgress/>
            </div>
        </div>
    );
}