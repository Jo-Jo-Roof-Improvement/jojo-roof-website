import { COMPANYGOOGLECODE } from 'company';
import { GoogleReview } from 'types';

const GOOGLE_PLACES_API_REVIEWS = (apiKey: string, placeId: string) => {
    return `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&place_id=${placeId}`;
};

export async function getReviews() {
    const response = await fetch(
        GOOGLE_PLACES_API_REVIEWS('AIzaSyBi2f37vN-5tpaV3koEmoTK2RENKJ1SntU', COMPANYGOOGLECODE)
    );
    const data = await response.json();
    const reviews = data.result.reviews as GoogleReview[];

    return reviews;
}
