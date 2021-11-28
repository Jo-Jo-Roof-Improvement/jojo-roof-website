import { GoogleReview } from 'types';

const GOOGLE_PLACES_API_REVIEWS = (apiKey: string, placeId: string) => {
    return `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&place_id=${placeId}`;
};

export async function getReviews() {
    const response = await fetch(
        // GOOGLE_PLACES_API_REVIEWS(process.env.REACT_APP_GOOGLE_API_KEY, 'ChIJN1t_tDeuEmsRUsoyG83frY4')
        GOOGLE_PLACES_API_REVIEWS('AIzaSyDlyfDY3pRsBWPh_o3wfshqShxjMcTlqcc', 'ChIJN1t_tDeuEmsRUsoyG83frY4')
    );
    const data = await response.json();
    const reviews = data.result.reviews as GoogleReview[];

    return reviews;
}
