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

  @media (max-width: 768px) {
    grid-auto-rows: minmax(auto, 40vw);
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;

const Photos = ({ images }) => {
  return (
    <Wrapper>
      <Desc>Other photos</Desc>
      <ImgsWrapper>
        {images.map((img) => (
          <Img src={img.url} alt="" key={img.id} />
        ))}
      </ImgsWrapper>
    </Wrapper>
  );
};

export default Photos;
