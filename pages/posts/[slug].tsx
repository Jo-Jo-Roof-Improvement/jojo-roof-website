import { Params } from 'next/dist/server/router';
import { BlogFrontMatter } from 'types';

import { getGenericStaticPaths, getPostBySlug } from 'lib/posts';
import { computeReadingTime } from 'lib/utils';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus/common';
import { BlogPostPage } from '@components/pages/Blog/BlogPostPage';

export interface BlogPostProps {
    frontMatter: BlogFrontMatter;
    serializedMarkdown: string;
    readingTime: number;
}

const BlogPost = ({ frontMatter, serializedMarkdown, readingTime }: BlogPostProps) => {
    if (!frontMatter) return <></>;

    return <BlogPostPage frontMatter={frontMatter} serializedMarkdown={serializedMarkdown} readingTime={readingTime} />;
};

export async function getStaticProps({ params }: Params) {
    const { frontMatter, markdownBody } = getPostBySlug('posts', params.slug);

    const serializedMarkdown = await serialize(markdownBody, {
        mdxOptions: {
            rehypePlugins: [rehypePrism],
        },
    });
    const readingTime = computeReadingTime(markdownBody);

    return {
        props: {
            frontMatter,
            serializedMarkdown,
            readingTime,
        },
    };
}

export async function getStaticPaths() {
    const paths = getGenericStaticPaths('posts');

    return {
        paths,
        fallback: false,
    };
}

export default BlogPost;
