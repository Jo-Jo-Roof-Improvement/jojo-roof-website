import { useGoSizes } from '@components/common/hooks/mediaQueries';
import { WideStrip } from '@components/common/strips/WideStrip';
import { TextBlock } from '@components/common/text/TextBlock';
import { Grid, Paper } from '@mui/material';
import { NAVBLUE, OFFWHITE } from 'styles/theme';
import { FullWidthImage } from '../TopImage';
import cls from './InfoCardsSection.module.scss';

const gridMargin = '1rem';

export const ServiceSummaries = () => {
    const { goHorizontal } = useGoSizes();
    const xs = goHorizontal ? 5 : 12;

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
                        Roofing Services
                    </TextBlock>
                </div>
                <Grid container alignContent="center" style={{ justifyContent: 'center' }}>
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard
                            imgStyle={{ objectPosition: '' }}
                            src="https://img1.wsimg.com/isteam/ip/3b7617b6-607a-4e98-87a9-2ddb28fc750c/cindy4.png"
                            title="Cleaning"
                        >
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
                        <ServiceCard
                            src="https://img1.wsimg.com/isteam/ip/3b7617b6-607a-4e98-87a9-2ddb28fc750c/IMG_8206.jpg"
                            title="Repointing"
                        >
                            <>
                                <TextBlock marginBottom="1rem" variant="body1">
                                    Are you seeing cracks, flakes or peels from your ridge capping, gable or collars?
                                </TextBlock>
                                <TextBlock variant="body2">
                                    That&apos;s normal, after years your roof start to deteriorate. That&apos;s why with
                                    our ROOF RESTORATION pack, we make sure to clean properly your tiles and ridges
                                    capping to add a coat of high-quality flexible compound pointing to reseal the loose
                                    pieces and cracks where the water would love to penetrate. Our team of fully
                                    qualified roofer offer a lovely smooth result that you&apos;ll love to see and last.
                                </TextBlock>
                            </>
                        </ServiceCard>
                    </Grid>
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard
                            imgStyle={{ objectPosition: '' }}
                            src="https://img1.wsimg.com/isteam/ip/3b7617b6-607a-4e98-87a9-2ddb28fc750c/Brighton%201.png"
                            title="Painting"
                        >
                            <>
                                <TextBlock marginBottom="1rem" variant="body1">
                                    Painting is the final step of a roof restore
                                </TextBlock>
                                <TextBlock variant="body2">
                                    CONCRETES tiles or COLORBOND Metal roof, this is the final step of the ROOF
                                    RESTORATION, after cleaning your tiles and repairing your roof, the satisfying part
                                    where you&apos;ll see the change from an old deteriorate, dusty and dirty color to a
                                    wide range of amazing different color to satisfy you need. We apply an undercoat
                                    (SEALER) to ensure strong adhesion for the paint and a shiny result. Then we apply 2
                                    thick coat of the best quality paint of DULUX ACRETEX ROOF MEMBRANE that last for
                                    more than 15 YEARS.
                                </TextBlock>
                            </>
                        </ServiceCard>
                    </Grid>
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard
                            src="https://img1.wsimg.com/isteam/ip/3b7617b6-607a-4e98-87a9-2ddb28fc750c/fb_212277917360523_940x788.jpg"
                            title="Repairs"
                        >
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
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard
                            imgStyle={{ objectPosition: '' }}
                            src="https://img1.wsimg.com/isteam/ip/3b7617b6-607a-4e98-87a9-2ddb28fc750c/NELSON1.png"
                            title="Roof Restoration"
                        >
                            <>
                                <TextBlock marginBottom="1rem" variant="body1">
                                    The roof restoration is the package of all our services.
                                </TextBlock>
                                <TextBlock variant="body2">
                                    We renovate it to make it look brand new without any failure. A roof restoration
                                    include in order replacing the broken tiles, roof cleaning, gutters cleaning, roof
                                    rebedding if that&apos;s necessary, roof repointing and finally we paint your roof
                                    with one coat of primer with strong adhesive to prepare it for the two thick topcoat
                                    of coloured roof membrane to give a refreshing and attracting look.
                                </TextBlock>
                            </>
                        </ServiceCard>
                    </Grid>
                    <Grid margin={gridMargin} item xs={xs}>
                        <ServiceCard
                            imgStyle={{ objectPosition: '' }}
                            src="https://img1.wsimg.com/isteam/ip/3b7617b6-607a-4e98-87a9-2ddb28fc750c/STEPHEN%20FASCIA.png"
                            title="Fasciaboard Repair"
                        >
                            <>
                                <TextBlock marginBottom="1rem" variant="body1">
                                    Wondering why the wood is getting rotten ?
                                </TextBlock>
                                <TextBlock variant="body2">
                                    You probably have a broken tiles, a bedding gable with cracks and loose mortar where
                                    the water is easily penetrating during rainfall. It is important to make sure that
                                    the gable including the fasciaboard, Scotia, rebedding and repointing are made
                                    properly and no water could leak inside. Effectively, if the wood is getting water
                                    after each rain, this would perish and rotten very fast.
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
            <FullWidthImage height="350px" src={src} otherStyles={imgStyle} />
            <TextBlock variant="h3" gutterBottom style={{ marginTop: '1.4rem' }}>
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
