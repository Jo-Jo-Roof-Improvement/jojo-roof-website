/* eslint-disable @next/next/no-img-element */
import React, { useState, useCallback, useEffect } from 'react';
import { Backdrop, Portal, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme: Theme) => ({
    backdrop: {
        zIndex: theme.zIndex.modal,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    portalImgWrapper: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: theme.zIndex.modal,
        cursor: 'pointer',
    },
    portalImgInnerWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    portalImg: {
        objectFit: 'contain',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    zoomedOutImage: {
        cursor: 'pointer',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export interface IZoomImage {
    alt: string;
    imgSrc: string;
    style?: React.CSSProperties;
    className?: string;
}

export const ZoomImage = ({ alt, imgSrc, style, className = '' }: IZoomImage) => {
    const cls = useStyles();

    const [zoomedIn, setZoomedIn] = useState(false);
    const [scrollbarSize, setScrollbarSize] = useState(0);

    const zoomIn = useCallback(() => {
        setZoomedIn(true);
    }, [setZoomedIn]);

    const zoomOut = useCallback(() => {
        setZoomedIn(false);
    }, [setZoomedIn]);

    useEffect(() => {
        var header = document.querySelector('header');
        if (header == null) return;

        if (zoomedIn) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarSize}px`;
            header.style.paddingRight = `${scrollbarSize}px`;
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
            header.style.paddingRight = '0px';
        }
    }, [zoomedIn, scrollbarSize]);

    return (
        <>
            {zoomedIn && (
                <Portal>
                    <Backdrop open={zoomedIn} className={cls.backdrop} onClick={zoomOut}></Backdrop>
                    <div onClick={zoomOut} className={cls.portalImgWrapper}>
                        <div className={cls.portalImgInnerWrapper}>
                            <img alt={alt} src={imgSrc} className={cls.portalImg} style={{}}></img>
                        </div>
                    </div>
                </Portal>
            )}
            <img
                alt={alt}
                src={imgSrc}
                onClick={zoomIn}
                className={classNames(cls.zoomedOutImage, className)}
                style={style}
            ></img>
        </>
    );
};
