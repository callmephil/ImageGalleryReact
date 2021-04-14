import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface IBlurredImage {
    loaded: boolean;
}

const BlurredSmallImage = styled.img<IBlurredImage>`
  flex-shrink: 0;
  cursor: pointer;
  background-size: cover;
  transition: filter 1s ease;
  background-position: 50% 50%;
  background-origin: border-box;
  background-color: whitesmoke;
  filter: ${props => (!props.loaded ? "blur(3px)" : "unset")};
`;

const imgShadow = new Image();

const isImageCached = (image: string) => {
    imgShadow.src = image;
    return imgShadow.complete;
};

export const LazyBlurLoad = ({ src, ...props }: any) => {
    const isLoaded = isImageCached(src);

    const [loadState, setLoadState] = useState({
        src: src,
        loaded: isLoaded
    });

    console.log(loadState.src);

    useEffect(() => {
        if (!isLoaded) {
            const img = new Image();
            img.onload = function () {
                setLoadState({
                    src: img.src,
                    loaded: true
                });
            };
            img.src = src;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BlurredSmallImage
            {...props}
            src={loadState.src}
            loaded={loadState.loaded}
        />
    );
};
