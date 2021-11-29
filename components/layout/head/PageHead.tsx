import Head from 'next/head';

export interface PageHeadProps {
    pageTitle: string;
}

export const PageHead = ({ pageTitle }: PageHeadProps) => (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Jo Jo Roof Improvement Home" />
        <link rel="icon" href="/brand-images/favicon.ico" />
    </Head>
);
