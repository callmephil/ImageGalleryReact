import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface IBlurredImage {
    // width: string;
    // height: string;
    loaded: boolean;
}

const BlurredSmallImage = styled.img<IBlurredImage>`
  filter: ${props => (!props.loaded ? "blur(3px)" : "unset")};
//   width: ${props => props.width};
//   height: ${props => props.height};
  transition: filter 1s ease;
  background-position: 50% 50%;
  background-origin: border-box;
  background-size: cover;
  flex-shrink: 0;
  cursor: pointer;
`;

const imgShadow = new Image();

const isImageCached = (image: string) => {
    imgShadow.src = image;
    return imgShadow.complete;
};

const THUMBS_PATH = "/20";
const IMAGES_PATH = "/1920";

export const LazyBlurLoad = ({ path, image, ...props }: any) => {
    const finalImgURI = path + IMAGES_PATH + image;
    const isLoaded = isImageCached(finalImgURI);

    const [loadState, setLoadState] = useState({
        src: isLoaded ? finalImgURI : path + THUMBS_PATH + image,
        loaded: isLoaded
    });

    useEffect(() => {
        if (!isLoaded) {
            const img = new Image();
            img.onload = function () {
                setLoadState({
                    src: img.src,
                    loaded: true
                });
            };
            img.src = finalImgURI;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BlurredSmallImage
            {...props}
            // srl_gallery_image="true"
            src={loadState.src}
            loaded={loadState.loaded}
        />
    );
};
