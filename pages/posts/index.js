import Container from "../../src/components/Container/Container"
import Layout from "../../src/components/Layout/Layout"
import { SectionHeading } from "../../src/components/Headings/Headings"
import Meta from "../../src/components/Meta/Meta"

const PostsPage = () => {
    return (
        <Layout>
            <Meta name="Blog" content="Описание страницы" />

            <Container>
                <section className="segment">
                    <SectionHeading>Posts</SectionHeading>
                </section>
            </Container>
        </Layout>
    )
}

export default PostsPage;