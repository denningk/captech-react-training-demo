import React from 'react';
import styles from './Post.module.css';
import classNames from 'classnames';

function Post(props) {
    return (
        <div className={classNames(styles.item, {[styles.light]: props.lightMode})}>
            <h3 className={styles.title}>{props.title}</h3>
            <h5 className={styles.subtitle}>{props.subtitle}</h5>
            <p className={styles.summary}>{props.summary}</p>
        </div>
    )
}

export default Post;