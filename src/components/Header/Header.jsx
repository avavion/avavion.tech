import Link from 'next/link';
import Brand from '../Brand/Brand';
import Container from '../Container/Container';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className="wrapper">
                    <Brand />
                    <nav>
                        <div className="nav-item-outer">
                            <Link href='/about'>About me</Link>
                        </div>


                        <div className="nav-item-outer">
                            <Link href='/blog'>Blog</Link>
                        </div>


                        <div className="nav-item-outer">
                            <Link href='/projects'>Projects</Link>
                        </div>


                        <div className="nav-item-outer">
                            <Link
                                href='https://github.com/avavion' target='_blank'
                            >
                                GitHub
                            </Link>
                        </div>
                    </nav>
                </div>
            </Container>
        </header>
    )
}