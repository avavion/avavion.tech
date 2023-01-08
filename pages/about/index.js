import React from 'react'
import Layout from '../../src/components/Layout/Layout'
import Meta from '../../src/components/Meta/Meta'
import Container from '../../src/components/Container/Container'
import { SectionHeading } from '../../src/components/Headings/Headings'

const AboutPage = () => {
    return (
        <Layout>
            <Meta name='About me' />

            <Container>
                <SectionHeading>Обо мне</SectionHeading>
            </Container>
        </Layout>
    )
}

export default AboutPage