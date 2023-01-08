import Link from 'next/link';
import Brand from '../Brand/Brand';
import Container from '../Container/Container';

import styles from './Header.module.scss';

export const NavLink = ({ children, href, ...props }) => {
    return (
        <div className="nav-item-outer">
            <Link href={href} {...props}>{children}</Link>
        </div>
    )
}

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className="wrapper">
                    <Brand />
                    <nav>
                        <NavLink href="/about">About Me</NavLink>
                        <NavLink href="/posts">Blog</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="https://github.com/avavion" target="_blank">GitHub</NavLink>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Header;