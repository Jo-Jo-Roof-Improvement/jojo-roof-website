import React from 'react';

import { HomePage, HomePageProps } from '@components/pages/Home/HomePage';
import { getGalleryPhotos } from 'lib/galleryPhotos';
import { getReviews } from 'lib/reviews';

export async function getStaticProps() {
    const galleryPhotoList = getGalleryPhotos();
    const reviews = await getReviews();

    return { props: { galleryPhotoList, reviews } };
}

export default function Home({ galleryPhotoList = [], reviews = [] }: HomePageProps) {
    return <HomePage galleryPhotoList={galleryPhotoList} reviews={reviews} />;
}
