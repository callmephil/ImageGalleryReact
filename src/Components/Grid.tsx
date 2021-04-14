import styled from "styled-components";

const GridContainer = styled.div`
    padding: 200px;
    padding-top: 0;
`;

const GridContent = styled.div`
  display: grid;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

function Grid(props: any) {
  return <GridContainer>{props.children}</GridContainer>;
}

Grid.Content = function Content({ children, ...rest }: any) {
  return <GridContent {...rest}>{children}</GridContent>;
};

export default Grid;
