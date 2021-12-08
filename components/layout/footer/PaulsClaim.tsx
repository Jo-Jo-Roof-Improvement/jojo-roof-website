
import { TextBlock } from '@components/common/text/TextBlock';

export const Claims = () => {
    return (
        <div className="flex w-full pb-4 pt-4 text-center justify-center">
            <TextBlock paddingRight="5px" align="center" fontSize="10pt">
                Design by Yessica Rico; Built by{'  '}
            </TextBlock>
            <a
                className="flex items-center"
                style={{ fontSize: '10pt', textDecoration: 'none', fontFamily: 'Source Sans Pro' }}
                href="https://www.linkedin.com/in/paul-gradie-phd-743b8b58/"
            >
                {'  '}Paul Gradie
            </a>
        </div>
    );
};
