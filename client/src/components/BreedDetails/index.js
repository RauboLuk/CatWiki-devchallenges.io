import styled from "styled-components";

import Details from "./components/Details";
import Photos from "./components/Photos";

const Wrapper = styled.div``;

const BreedDetails = ({ id }) => {
  return (
    <Wrapper>
      <Details />
      <Photos />
    </Wrapper>
  );
};

export default BreedDetails;
