import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  padding: 0 4vw;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

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
  max-height: 400px;
`;

const Rectangle82 = styled.div`
  content: "";
  display: block;
  position: absolute;
  top: 40px;
  left: 0.5vw;
  width: 83.64px;
  max-height: 305.12px;
  height: 15vw;
  background: #dec68b;
  border-radius: 14px;
  z-index: -1;
`;

const Img = styled.img`
  border-radius: 24px;
  max-width: 100%;

  @media (max-width: 768px) {
    max-height: 400px;
  }
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Info = styled.div`
  width: 85%;

  @media (max-width: 768px) {
    width: 100%;
  }

  & * {
    padding: 16px 0;

    @media (max-width: 768px) {
      padding: 10px 0;
    }
  }
`;

const Bold = styled.span`
  font-weight: 700;

@media (max-width: 768px) {
  font-size: 14px;
}
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

@media (max-width: 768px) {
  font-size: 14px;
}
`;

const ScoreLine = styled.div`
  width: 60px;
  height: 12px;
  padding: 0;
  margin: auto;
  border-radius: 8px;

  background: ${(props) => (props.true ? "#544439" : "#E0E0E0")};

  @media (max-width: 768px) {
    width: 10vw;
  }
`;

const Details = ({ breed, img }) => {
  const generateScore = (num) => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      if (num > i) arr.push(<ScoreLine true key={i} />);
      else arr.push(<ScoreLine key={i} />);
    }
    return arr;
  };
  return (
    <Wrapper>
      <ImgWrapper>
        <Rectangle82 />
        {img ? <Img src={img} alt="cat breed" /> : null}
      </ImgWrapper>
      <DataWrapper>
        <Title>{breed.name}</Title>
        <Desc>{breed.description}</Desc>
        <Info>
          <Bulet>
            <Bold>Temperament: </Bold>
            {breed.temperament}
          </Bulet>
          <Bulet>
            <Bold>Origin: </Bold>
            {breed.origin}
          </Bulet>
          <Bulet>
            <Bold>Life Span:</Bold> {breed.life_span} years
          </Bulet>
          <TableRow>
            <Bold>Adaptability:</Bold> {generateScore(breed.adaptability)}
          </TableRow>
          <TableRow>
            <Bold>Affection level:</Bold> {generateScore(breed.affection_level)}
          </TableRow>
          <TableRow>
            <Bold>Child Friendly:</Bold> {generateScore(breed.child_friendly)}
          </TableRow>
          <TableRow>
            <Bold>Grooming:</Bold> {generateScore(breed.grooming)}
          </TableRow>
          <TableRow>
            <Bold>Intelligence:</Bold> {generateScore(breed.intelligence)}
          </TableRow>
          <TableRow>
            <Bold>Health issues:</Bold> {generateScore(breed.health_issues)}
          </TableRow>
          <TableRow>
            <Bold>Social needs:</Bold> {generateScore(breed.social_needs)}
          </TableRow>
          <TableRow>
            <Bold>Stranger friendly:</Bold>{" "}
            {generateScore(breed.stranger_friendly)}
          </TableRow>
        </Info>
      </DataWrapper>
    </Wrapper>
  );
};

export default Details;
