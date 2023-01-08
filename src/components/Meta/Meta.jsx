import Head from "next/head";

const Meta = ({ name, content }) => {
    const title = name ? `${name} | avavion.` : 'avavion. | Personal Blog';
    const text = content ? content : title;

    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={text} />
            <title>{title}</title>
        </Head>
    )
}

export default Meta;