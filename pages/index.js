import Card from '../src/components/Card/Card'
import Meta from '../src/components/Meta/Meta'
import Header from '../src/components/Header/Header'
import Container from '../src/components/Container/Container';
import { SectionHeading } from '../src/components/Headings/Headings';
import Layout from '../src/components/Layout/Layout';

const github_api = "https://api.github.com/users/avavion/repos";

export default function Home({ data }) {

  const repositories = data.map((repository) => {
    return {
      id: repository.id,
      name: repository.name,
      text: repository.description,
      stars: repository.stargazers_count,
      url: repository.html_url,
      created_at: repository.created_at
    }
  });

  const sortedRepositories = repositories.sort((a, b) => {
    const a_date = new Date(a.created_at);
    const b_date = new Date(b.created_at);

    if (a_date < b_date) {
      return 1;
    } else {
      return -1;
    }
  })

  return (
    <Layout>
      <Meta content="Alan Bogov - front-end and back-end developer." />

      <Container>
        <section className="segment large">
          <SectionHeading path='/projects'>Project</SectionHeading>
          <div className="grid repositories">
            {sortedRepositories.map(
              (repository) => (
                <Card key={repository.id} card={repository} />
              )
            )}
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(github_api);

  const data = await response.json();

  return {
    props: {
      data
    }
  }
}