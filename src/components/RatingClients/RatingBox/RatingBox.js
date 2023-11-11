import React from 'react'
import Rating from '@mui/material/Rating';
import styles from '../Rating.module.css'

const RatingBox = props => {

    return (
        <div className={styles.boxClient}>
            <div>
                <Rating name="read-only" value={props.item.stars} readOnly />
            </div>
            <div>
                <p className={styles.commentStyle}>{props.item.comment}</p>
            </div>
            <div>
                <p className={styles.nameStyle}>{props.item.name}</p>
            </div>
        </div>
    )
}

export default RatingBox