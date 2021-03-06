export type GooglePlaceResponse = {
    result: {
        reviews: GoogleReview[];
    };
};

export type AnyVoidFunction = (...args: any[]) => void;

export type GoogleReview = {
    author_name: string;
    author_url: string;
    language: string; // like en
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number; // like 1636458048
};

export type BlogFrontMatter = {
    title: string;
    description: string;
    author: string;
    author_img: string;
    date: string;
    image: string;
    tags: string[];
    snippet: string;
};

export type BlogPostMeta = {
    slug: string;
    siteTitle: string;
    frontMatter: BlogFrontMatter;
    markdownBody: string;
    wordCount: number;
    readingTime: string;
};
