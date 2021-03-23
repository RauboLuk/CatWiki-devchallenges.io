import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  padding: 0 4vw;

  & * {
    margin: 0;
    color: #291507;
    font-family: Montserrat;
    font-style: normal;
    letter-spacing: 0em;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  position: relative;
  padding: 0 1vw;
  min-height: 400px;
`;

const Rectangle82 = styled.div`
  content: "";
  display: block;
  position: absolute;
  top: 40px;
  left: 0.5vw;
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

const Title = styled.p`
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  text-align: left;
  margin: 5px 0;
`;

const Desc = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  margin: 15px 0;
`;

const Info = styled.div`
  width: 85%;

  & * {
    padding: 16px 0;
  }
`;

const Bold = styled.span`
  font-weight: 700;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 35% repeat(5, 1fr);
  padding: 0;
`;

const Bulet = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-align: left;
`;

const ScoreLine = styled.div`
  width: 60px;
  height: 12px;
  padding: 0;
  margin: auto;
  border-radius: 8px;

  background: ${props => props.true ? '#544439' : '#E0E0E0'};
`;

const Details = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Rectangle82 />
        <Img src="https://via.placeholder.com/380x380" alt="cat breed" />
      </ImgWrapper>
      <DataWrapper>
        <Title>Title</Title>
        <Desc>
          Bengals are a lot of fun to live with, but they're definitely not the
          cat for everyone, or for first-time cat owners. Extremely intelligent,
          curious and active, they demand a lot of interaction and woe betide
          the owner who doesn't provide it.
        </Desc>
        <Info>
          <Bulet>
            <Bold>Temperament:</Bold> Alert, Agile, Energetic, Demanding,
            Intelligent
          </Bulet>
          <Bulet>
            <Bold>Origin:</Bold> United States
          </Bulet>
          <Bulet>
            <Bold>Life Span:</Bold> 12 - 15 years
          </Bulet>
          <TableRow>
            <Bold>Adaptability:</Bold> <ScoreLine true/>
            <ScoreLine true/> <ScoreLine />
            <ScoreLine /> <ScoreLine />
          </TableRow>
          <TableRow>
            <Bold>Affection level:</Bold> <ScoreLine />
            <ScoreLine /> <ScoreLine />
            <ScoreLine /> <ScoreLine />
          </TableRow>
          <TableRow>
            <Bold>Child Friendly:</Bold> <ScoreLine />
            <ScoreLine /> <ScoreLine />
            <ScoreLine /> <ScoreLine />
          </TableRow>
          <TableRow>
            <Bold>bulet:</Bold> <ScoreLine />
            <ScoreLine /> <ScoreLine />
            <ScoreLine /> <ScoreLine />
          </TableRow>
        </Info>
      </DataWrapper>
    </Wrapper>
  );
};

export default Details;
