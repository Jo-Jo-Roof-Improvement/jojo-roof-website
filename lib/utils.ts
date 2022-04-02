import createCache from '@emotion/cache';
import { floor, round } from 'lodash';

const WORDS_READ_PER_MINUTE_FOR_A_TYPICAL_HUMAN = 100;

export const createEmotionCache = () => {
    return createCache({ key: 'css', prepend: true });
};

const blackList = ['#', '<', '/', 'src=', '-'];

export const computeReadingTime = (content: string): number => {
    const words = content.split(/\s+/).filter((word) => {
        let isBlackListed = false;
        blackList.forEach((blackListedWord) => {
            if (word.startsWith(blackListedWord)) {
                isBlackListed = true;
            }
        });
        return !isBlackListed;
    });

    const time = round(floor(words.length / WORDS_READ_PER_MINUTE_FOR_A_TYPICAL_HUMAN, 0));
    return time;
};
