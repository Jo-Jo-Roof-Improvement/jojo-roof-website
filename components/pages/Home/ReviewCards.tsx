import { GoogleReview } from 'types';
import { CardWithSlideOver } from './CardWithSlideOver';

export interface ReviewCardsProps {
    reviews: GoogleReview[];
}

export const ReviewCards = ({ reviews }: ReviewCardsProps) => {
    return (
        <div className="flex flex-row justify-evenly">
            {reviews.map((review, index) => (
                <CardWithSlideOver review={review} key={index} />
            ))}
        </div>
    );
};
