import React from "react";
import LazyLoad from "react-lazyload";
import styled from "styled-components";
import { LazyBlurLoad } from "BlurLoader";
import { SRLWrapper } from "simple-react-lightbox";

const photos = Array(30)
  .fill(1)
  .map((p, i) => ({
    id: i
  }));

const Grid = styled.div`
  display: grid;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const ImgLoadingBlock = ({ height = 180, width = 200 }: any) => (
  <div style={{ background: "#f1f4ff", height, width }} />
);

const size = {
  height: "300px",
  width: "100%"
};

const options = {
  buttons: {
    showDownloadButton: false,
  },
};

function App() {
  return (
    <SRLWrapper options={options}>
      <div style={{ padding: '200px' }}>
        <Grid>
          {photos.map((p, i) => (
            <LazyLoad
              {...size}
              once
              key={p.id}
              placeholder={
                <ImgLoadingBlock height={size.height} width={size.width} />
              }
              debounce={100}
            >
              <LazyBlurLoad
                {...size}
                image={`?random=${i + 1}`}
                path="https://picsum.photos"
              />
            </LazyLoad>
          ))}
        </Grid>
      </div>
    </SRLWrapper>

  );
};

export default App;