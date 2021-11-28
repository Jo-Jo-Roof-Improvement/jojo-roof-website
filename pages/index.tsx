import { HomePage, HomePageProps } from '@components/pages/Home/HomePage';
import { getGalleryPhotos } from 'lib/galleryPhotos';

export async function getStaticProps() {
    const galleryPhotoList = getGalleryPhotos();
    return { props: { galleryPhotoList } };
}

export default function Home({ galleryPhotoList }: HomePageProps) {
    return <HomePage galleryPhotoList={galleryPhotoList} />;
}
