import styled from "styled-components";

const Wrapper = styled.div`
margin: 8vh 0 15vh 0;
`;

const Desc = styled.p`
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
`;

const ImgsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(auto, 300px);
  justify-items: center;
  align-items: center;
  justify-content: stretch;
  align-content: stretch;
  gap: 2vw;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Photos = () => {
  return (
    <Wrapper>
      <Desc>Other photos</Desc>
      <ImgsWrapper>
        <Img src="https://via.placeholder.com/380x380" alt="" />
        <Img src="https://via.placeholder.com/580x180" alt="" />
        <Img src="https://via.placeholder.com/180x580" alt="" />
        <Img src="https://via.placeholder.com/320x350" alt="" />
        <Img src="https://via.placeholder.com/100" alt="" />
        <Img src="https://via.placeholder.com/450x450" alt="" />
      </ImgsWrapper>
    </Wrapper>
  );
};

export default Photos;
