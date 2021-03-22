import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 0 4vw;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ImgWrapper = styled.div`
  width: 50%;
`;

const Img = styled.img`
  padding: 50px;
  max-width: 100%;
`;

const Details = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src="https://via.placeholder.com/400" alt="cat breed" />
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
