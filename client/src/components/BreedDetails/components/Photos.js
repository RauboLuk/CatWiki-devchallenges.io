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

const Photos = ({ images }) => {
  return (
    <Wrapper>
      <Desc>Other photos</Desc>
      <ImgsWrapper>
        {images.map(img => (
          <Img src={img.url} alt="" key={img.id}/>
        ))}
      </ImgsWrapper>
    </Wrapper>
  );
};

export default Photos;
