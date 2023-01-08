import React from 'react'
import Header from '../Header/Header'
import Container from '../Container/Container'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout