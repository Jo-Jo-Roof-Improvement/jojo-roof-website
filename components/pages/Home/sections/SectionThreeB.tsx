import { ZoomImage } from '@components/common/image/ZoomInImage';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TextBlock } from '@components/common/text/TextBlock';
import { Grid, Paper } from '@mui/material';
import { NAVBLUE, OFFWHITE } from 'styles/theme';
import { FullWidthImage } from '../TopImage';
import cls from './SectionTwoB.module.scss';

const gridMargin = '1rem';

const xs = 5;

export const SectionThreeB = () => {
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
                        Roof Maintenance Services
                    </TextBlock>
                </div>
                <Grid container alignContent="center" style={{ justifyContent: 'center' }}>
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard imgStyle={{ objectPosition: '' }} src="/services/cleaning.jpg" title="Cleaning">
                            <>
                                <TextBlock marginBottom="1rem" variant="body1">
                                    <b>Concrete</b> roof tiles, <b>Terracotta</b> roof tiles or <b>Colorbond</b> metal
                                    roof ?
                                </TextBlock>
                                <TextBlock variant="body2">
                                    We clean your roof with high pressure power machine Karsher to give it a brand new
                                    look, eradicating all traces of moss, dirt, lichen, animals dropping and others
                                    natural element. Note that pressure cleaning your roof help your tiles to prosper.
                                </TextBlock>
                            </>
                        </ServiceCard>
                    </Grid>
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard src="/services/repointing.jpg" title="Repointing">
                            <>
                                <TextBlock marginBottom="1rem" variant="body1">
                                    Are you seeing cracks, flakes or peels from your ridge capping, gable or collars?
                                </TextBlock>
                                <TextBlock variant="body2">
                                    That’s normal, after years your roof start to deteriorate. That’s why with our ROOF
                                    RESTORATION pack, we make sure to clean properly your tiles and ridges capping to
                                    add a coat of high-quality flexible compound pointing to reseal the loose pieces and
                                    cracks where the water would love to penetrate. Our team of fully qualified roofer
                                    offer a lovely smooth result that you’ll love to see and last.
                                </TextBlock>
                            </>
                        </ServiceCard>
                    </Grid>
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard imgStyle={{ objectPosition: '' }} src="/services/painting.jpg" title="Painting">
                            <>
                                <TextBlock marginBottom="1rem" variant="body1">
                                    Painting is the final step of a roof restore
                                </TextBlock>
                                <TextBlock variant="body2">
                                    CONCRETES tiles or COLORBOND Metal roof, this is the final step of the ROOF
                                    RESTORATION, after cleaning your tiles and repairing your roof, the satisfying part
                                    where you’ll see the change from an old deteriorate, dusty and dirty color to a wide
                                    range of amazing different color to satisfy you need. We apply an undercoat (SEALER)
                                    to ensure strong adhesion for the paint and a shiny result. Then we apply 2 thick
                                    coat of the best quality paint of DULUX ACRETEX ROOF MEMBRANE that last for more
                                    than 15 YEARS.
                                </TextBlock>
                            </>
                        </ServiceCard>
                    </Grid>
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard src="/services/rebedding.jpg" title="Repairs">
                            <>
                                <TextBlock marginBottom="1rem" variant="body1">
                                    Your roof is leaking, damaging your walls, your plastering, the new fresh paint of
                                    your home, and you are wondering where its coming from ?
                                </TextBlock>
                                <TextBlock variant="body2">
                                    Its simple, you probably haver a broken tiles, broken ridges capping, rusty valleys,
                                    loose mortar. With JOJO Roof Improvement we manage to detect the leak and make sure
                                    to return your roof to a watertight condition.
                                </TextBlock>
                            </>
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
            <TextBlock variant="h3" gutterBottom style={{marginTop: "1.4rem"}}>
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
