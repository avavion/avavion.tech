import Link from 'next/link';
import { Tags, Tag } from '../Tag/Tag';

import styles from './Card.module.scss';

export const CardYear = ({ date }) => {
    const year = new Date(date).getFullYear();

    return (
        <time
            className={styles.year}
            dateTime={date}
        >
            {year}
        </time>
    );
}

export const CardTitle = ({ children, url }) => {
    return (
        <h3 className={styles.title}>
            <Link href={url} target="_blank" className={styles.link}>
                {children}
            </Link >
        </h3>
    )
}

export const CardText = ({ children }) => {
    return (
        <p className={styles.text}>
            {children}
        </p>
    )
}

const Card = ({ card }) => {
    const { name, text, url, created_at } = card;

    return (
        <article className={styles.card}>
            <CardYear date={created_at} />
            <CardTitle url={url}>{name}</CardTitle>
            <CardText>{text}</CardText>
            <Tags>
                <Tag>Shopify</Tag>
                <Tag>Freelance</Tag>
            </Tags>
        </article>
    )
}

export default Card;