/* eslint-disable @next/next/no-img-element */
import { WideStrip } from '@components/common/strips/WideStrip';
import { TextBlock } from '@components/common/text/TextBlock';
import { Grid, Paper, Theme } from '@mui/material';
import React from 'react';
import { OFFWHITE } from 'styles/theme';
import { TextBlockSection } from '../TextBlockSection';
import cls from './SectionTwoB.module.scss';

const shield = 'brand-images/shield.png';
const stress = 'brand-images/stress.png';
const stress2 = 'brand-images/stress2.png';
const warranty = 'brand-images/warranty.png';
const medal = 'brand-images/medal.png';
const fraud = 'brand-images/fraud.png';
const star = 'brand-images/star.png';
const stop = 'brand-images/stop.png';
const chooseA = 'brand-images/chooseA.png';
const chooseB = 'brand-images/chooseB.png';
const titleV = '20pt';
const textV = 'h6';

const Img = ({
    src,
    alt,
    className,
    style = {},
}: {
    style?: React.CSSProperties;
    src: string;
    alt: string;
    className?: string;
}) => <img style={{ ...style, marginTop: '1rem', marginBottom: '0px' }} src={src} alt={alt} className={className} />;

const icons = [
    <div style={{ display: 'flex', flexDirection: 'row' }} key={0}>
        <Img src={stress2} alt="stress2" />
        <Img src={stress} alt="stress" />
    </div>,
    <Img key={2} src={shield} alt="shield" />,
    <Img key={3} src={warranty} alt="warranty" />,
    // <Img key={3} src={fraud} alt="fraud" />,
    <div style={{ display: 'flex', flexDirection: 'row' }} key={0}>
        {[1, 2, 3, 4, 5].map((i) => (
            <Img style={{ height: '50px' }} key={3} src={star} alt="star" />
        ))}
    </div>,
    <Img key={3} src={chooseB} alt="chooseB" />,
    <Img key={3} src={chooseA} alt="chooseA" />,
];
const mgTop = 'mt-9';
const items = [
    <TextBlockSection
        marginTop={mgTop}
        key={0}
        title={
            <>
                <TextBlock display={'flex'} alignItems="center" flexDirection={'row'} style={{ fontSize: titleV }}>
                    Put a{' '}
                    <img
                        style={{ height: '60px', marginLeft: '12px', marginRight: '12px' }}
                        key={3}
                        src={stop}
                        alt="stop"
                    />{' '}
                    to the{' '}
                </TextBlock>
                <TextBlock style={{ fontSize: titleV, fontFamily: 'Rubik Glitch' }}>chronic stress !</TextBlock>
            </>
        }
        text={
            <TextBlock style={{ fontSize: textV }}>
                We will re-roof or restore so that you can live in a secure home that won&apos;t leak, crack, flake or
                peel!
            </TextBlock>
        }
    />,
    <TextBlockSection
        key={1}
        marginTop={mgTop}
        title={<TextBlock style={{ fontSize: titleV }}>Your Roof is your Home&apos;s Main Defense</TextBlock>}
        text={
            <TextBlock style={{ fontSize: textV }}>
                With us you&apos;ll get a beautifully restored roof that brings a sense of
                <i> renewal </i>
                to your home.
            </TextBlock>
        }
    />,
    <TextBlockSection
        key={2}
        marginTop={mgTop}
        title={
            <TextBlock style={{ fontSize: titleV }}>
                We&apos;ve got the #1 Roof Restoration Warranty in the Business
            </TextBlock>
        }
        text={
            <TextBlock style={{ marginTop: '1.2rem', fontSize: textV }}>
                Feel absolute confidence with our incredible <b>10 YEAR warranty</b>!
            </TextBlock>
        }
    />,
    <TextBlockSection
        key={3}
        marginTop={mgTop}
        textVariant={textV}
        title={<TextBlock style={{ fontSize: titleV }}>Worried about trady scams ?</TextBlock>}
        text={
            <TextBlock style={{ fontSize: textV }}>
                We&apos;ve got a 5-star rating on Google. Thats a perfect track record of satisfied customers who chose
                us for their roof restoration service needs.
            </TextBlock>
        }
    />,
    <TextBlockSection
        key={4}
        marginTop={mgTop}
        title={<TextBlock style={{ fontSize: titleV }}>Why choose us ?</TextBlock>}
        text={
            <TextBlock style={{ fontSize: textV }}>
                No scams, no subcontractors, no funny business. Think of our team of qualified roofers as your personal
                guides to roofing. On the job, we are availble to answer questions, teach you about the work, and
                provide you with peace of mind. We&apos;re part of your home maintenance family.
            </TextBlock>
        }
    />,
];

export const SectionTwoB = () => {
    return (
        <WideStrip align="center" height="200px" backgroundColor={OFFWHITE}>
            <Grid container alignContent="center" justifyContent="center">
                {items.map((item, index) => (
                    <Grid className={cls.gridItem} xs={5} key={index}>
                        <Paper className={cls.paper}>
                            <div className={cls.paperDiv}>
                                {icons[index]}
                                {item}
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </WideStrip>
    );
};
