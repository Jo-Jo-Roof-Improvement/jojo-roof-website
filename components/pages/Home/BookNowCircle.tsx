import { JoButton } from '@components/common/buttons/JoButton';
import { TextBlock } from '@components/common/text/TextBlock';
import classNames from 'classnames';
import styles from './HomePage.module.css';

interface BookNowCircleProps {
    alignment: string; // tailwind style
    visibility: string; // tailwind style
}
export const BookNowCircle = ({ alignment, visibility }: BookNowCircleProps) => {
    return (
        <div
            style={{ borderColor: 'black', borderWidth: '2px', backgroundColor: '#CFCFD4' }}
            className={classNames(
                'rounded-full h-72 w-72 md:h-72 md:w-72',
                ' flex flex-col justify-center text-center',
                `${alignment}`,
                `${visibility}`,
                styles.transition
            )}
        >
            <TextBlock align="center" variant="h4" className="mx-auto" style={{ textShadow: '1px 1px 2px white' }}>
                Looking for a roof contractor?
            </TextBlock>
            <JoButton
                style={{ borderRadius: '0px', backgroundColor: 'rgba(22, 22, 22, 1.0)', boxShadow: '6px 6px darkgray' }}
                className="text-center w-1/2 mx-auto mt-2 text-white"
            >
                Book Now
            </JoButton>
        </div>
    );
};
