import { BookNowCircle } from './BookNowCircle';

export const BookNowCircleContainer = () => {
    return (
        <div className="absolute w-full bottom-10 lg:bottom-20 lg:pr-36 xsm:hidden">
            <BookNowCircle alignment="float-right" visibility="hidden lg:flex" />
            <BookNowCircle alignment="mx-auto" visibility="lg:hidden" />
        </div>
    );
};
