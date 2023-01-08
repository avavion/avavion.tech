import Link from 'next/link';
import styles from './Headings.module.scss';

export const SectionHeading = ({ children, path }) => {
    return (
        <h2 className={styles.home}>
            <div>
                <div className={styles.title}>
                    {children}
                </div>
            </div>

            {path && <Link href={path}>
                View All
            </Link>}

        </h2>
    )
}