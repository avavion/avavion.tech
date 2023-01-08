import React from 'react'
import Layout from '../../src/components/Layout/Layout'
import Meta from '../../src/components/Meta/Meta'
import Container from '../../src/components/Container/Container'
import { SectionHeading } from '../../src/components/Headings/Headings'

const ProjectsPage = () => {
    return (
        <Layout>
            <Meta name="Projects" />

            <Container>
                <section>
                    <SectionHeading>Проекты</SectionHeading>
                </section>
            </Container>
        </Layout>
    )
}

export default ProjectsPage