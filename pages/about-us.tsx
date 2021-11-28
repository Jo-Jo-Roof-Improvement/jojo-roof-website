import { AboutUsPage } from '@components/pages/AboutUs/AboutUsPage';
import { getReviews } from 'lib/reviews';
import { GoogleReview } from 'types';

export async function getStaticProps() {
    const reviews = await getReviews();

    return { props: { reviews } };
}

export default function AboutUs({ reviews }: { reviews: GoogleReview[] }) {
    return <AboutUsPage reviews={reviews} />;
}
