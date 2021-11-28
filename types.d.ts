export type GooglePlaceResponse = {
    result: {
        reviews: GoogleReview[];
    };
};

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
