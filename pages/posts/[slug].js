import Container from "../../src/components/Container/Container";
import { SectionHeading } from "../../src/components/Headings/Headings";
import Layout from "../../src/components/Layout/Layout";
import Meta from "../../src/components/Meta/Meta";

export default function PostPage() {
    return (
        <Layout>
            <Meta name={"Post"} />

            <Container>
                <section>
                    <SectionHeading>Post</SectionHeading>
                </section>
            </Container>
        </Layout>
    )
}