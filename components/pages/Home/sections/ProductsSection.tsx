import { WideStrip } from '@components/common/strips/WideStrip';
import { TextBlock } from '@components/common/text/TextBlock';
import { Grid, Paper } from '@mui/material';
import { NAVBLUE, OFFWHITE } from 'styles/theme';
import { FullWidthImage } from '../TopImage';
import cls from './InfoCardsSection.module.scss';

const gridMargin = '1rem';

const xs = 5;

export const ProductSections = () => {
    return (
        <WideStrip
            align="center"
            maxHeight=""
            backgroundColor={OFFWHITE}
            className="flex flex-col items-center w-full lg:flex-row"
        >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                <div className={cls.sectionThreeBTitle}>
                    <TextBlock
                        variant="h2"
                        style={{ color: NAVBLUE, marginBottom: '2rem', marginTop: '2rem' }}
                        gutterBottom
                        color={NAVBLUE}
                    >
                        Our Products
                    </TextBlock>
                </div>
                <Grid container alignContent="center" style={{ justifyContent: 'center' }}>
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard
                            imgStyle={{ objectPosition: '' }}
                            src="/brand-images/tempbucket.png"
                            title="Ridgebond/Supapoint flexible compound"
                        >
                            <TextBlock variant="body2">
                                This mix of flexible compound will help your roof remain intact against storm, rain,
                                wind or even movement from natural elements. We are using the best quality of the market
                                to match our guarantee policy and ensure that your roof will benefit from the best
                                quality possible. This cement is attach from the side of the ridge capping to the first
                                tiles under the ridge capping and stick to the mortar. With the skill of our team, we
                                make sure to give a smooth result to make it last as long as it can. Repointing your
                                roof need a high competence to be completed, this is why it is important to choose the
                                right company.
                            </TextBlock>
                        </ServiceCard>
                    </Grid>
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard
                            imgStyle={{ objectPosition: '' }}
                            src="/brand-images/tempbucket.png"
                            title="RGL Adhesive and DULUX ACRETEX"
                        >
                            <TextBlock variant="body2">
                                At JOJO roof improvement, we provide the most used and best quality products to paint
                                our roofs. RGL adhesive is a well-known brand in the world of roofers. It is mainly used
                                to paint concrete tile roofs, it is a good quality brand that is very affordable and
                                gives a 10 year guarantee on their product. RGL Adhesive offer a range of sealers,
                                primers and topcoats to protect and beautify. Dulux Acretex is our favorite brand since
                                it guarantees 15 years on their product, the quality of the paint is better and the
                                result just as much. However, the price varies depending on the quality. Dulux Acretex
                                offer three different sealers, depending on the types of roof, from a light coat to a
                                thicker coat. And also three different types of top coat, for metal roof with a satin
                                result, for concrete roof or even the cool roof commercial.
                            </TextBlock>
                        </ServiceCard>
                    </Grid>
                </Grid>
            </div>
        </WideStrip>
    );
};

const ServiceCard = ({
    src,
    title,
    children,
    imgStyle = {},
}: {
    children: React.ReactChild;
    src: string;
    title: React.ReactNode;
    imgStyle?: React.CSSProperties;
}) => {
    return (
        <Paper className={cls.paper3}>
            <FullWidthImage height="250px" src={src} otherStyles={imgStyle} />
            <TextBlock align="center" variant="h4" gutterBottom style={{ marginTop: '1.2rem' }}>
                {title}
            </TextBlock>
            <div
                style={{
                    textAlign: 'center',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                }}
            >
                {children}
            </div>
        </Paper>
    );
};
