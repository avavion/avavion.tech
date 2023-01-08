import styles from './Tag.module.scss';

export const Tags = ({ children }) => {
    return (
        <div className={styles.tags}>
            {children}
        </div>
    )
}

export const Tag = ({ children }) => {
    return (
        <div className={styles.tag}>
            {children}
        </div>
    )
};