import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  padding: 0 4vw;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  position: relative;
  padding: 0 3vw;
  min-height: 400px;
`;

const Rectangle82 = styled.div`
  content: "";
  display: block;
  position: absolute;
  top: 40px;
  left: 2vw;
  width: 83.64px;
  height: 305.12px;
  background: #dec68b;
  border-radius: 14px;
  z-index: -1;
`;

const Img = styled.img`
  border-radius: 24px;
  max-width: 100%;
`;

const Details = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Rectangle82 />
        <Img src="https://via.placeholder.com/380x380" alt="cat breed" />
      </ImgWrapper>
      <DataWrapper>
        <h1>Title</h1>
        <p>
          Bengals are a lot of fun to live with, but they're definitely not the
          cat for everyone, or for first-time cat owners. Extremely intelligent,
          curious and active, they demand a lot of interaction and woe betide
          the owner who doesn't provide it.
        </p>
        <ul>
          <li>Temperament: Alert, Agile, Energetic, Demanding, Intelligent</li>
          <li>Origin: United States</li>
          <li>Life Span: 12 - 15 years</li>
          <li>Adaptability:</li>
          <li>bulet</li>
          <li>bulet</li>
        </ul>
      </DataWrapper>
    </Wrapper>
  );
};

export default Details;
