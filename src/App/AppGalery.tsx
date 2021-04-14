import React from "react";
import Grid from "Components/Grid";
import LazyLoad from "react-lazyload";
import { LazyBlurLoad } from "Components/Image";
import { SRLWrapper } from "simple-react-lightbox";

const photos = Array(59)
  .fill(1)
  .map((p, i) => ({
    id: i,
  }));

const size = {
  height: "300px",
  width: "100%",
};

const options = {
  buttons: {
    showDownloadButton: false,
  },
};

function AppGalery() {
  return (
    <SRLWrapper options={options}>
      <Grid>
        <Grid.Content>
          {photos.map((p, i) => (
            <LazyLoad
              once
              key={p.id}
              debounce={100}>
              <LazyBlurLoad {...size} src={`https://picsum.photos/1920?random=${i}`}/>
            </LazyLoad>
          ))}
        </Grid.Content>
      </Grid>
    </SRLWrapper>
  );
}

export default AppGalery;
