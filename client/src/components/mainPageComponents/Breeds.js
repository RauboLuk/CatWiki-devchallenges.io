import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as ArrowSvg } from "../../assets/arrow_right_alt-black-24dp.svg";
import LoadingBar from "../LoadingBar";

const Wrapper = styled.div`
  margin-top: -40px;
  padding: 80px min(5vw, 108px) min(5vw, 108px);
  border-radius: 0px 0px 42px 42px;

  background: #e3e1dc;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "title ."
    "bigText more"
    "images images";
  gap: 46px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 25px;
    ${"" /* padding: 15vw 7vw; */}
  }

  & * {
    margin: 0;
    color: #291507;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;

    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

const Title = styled.p`
  grid-area: title;
  letter-spacing: 0em;
  text-align: left;

  &:after {
    content: "";
    margin-top: 8px;
    display: block;
    width: min(59.18px, 10vw);
    height: 3.21px;

    background: #4d270c;
    border-radius: 77px;
  }
`;

const BigText = styled.p`
  grid-area: bigText;
  font-weight: bold;
  font-size: min(48px, 4vw);
  line-height: 59px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    width: 70%;
  }
`;

const MoreWrapper = styled.div`
  grid-area: more;
  align-self: end;
  justify-self: end;

  @media (max-width: 768px) {
    display: none;
  }
`;

const More = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: rgba(41, 21, 7, 0.6);
  display: flex;
`;

const Arrow = styled(ArrowSvg)`
  padding-left: 14px;
  margin-top: -2px;
  fill: #7f736a;
`;

const ImagesSection = styled.div`
  grid-area: images;
  display: grid;
  gap: 51px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const Item = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 12px;
    width: 45%;
  }
`;

const ImgWrapper = styled.div`
  max-height: 220px;
  max-width: 100%;

  ${"" /* doesn't work on ff */}
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  border-radius: 24px;
`;

const Desc = styled.p`
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;
  word-wrap: anywhere;
`;

const Breeds = () => {
  return (
    <Wrapper>
      <Title>Most Searched Breeds</Title>
      <BigText>66+ Breeds For you to discover</BigText>
      <MoreWrapper>
        <More to={"/top"}>
          SEE MORE <Arrow />
        </More>
      </MoreWrapper>
      {BreedList()}
    </Wrapper>
  );
};

export default Breeds;

const BreedList = () => {
  let history = useHistory();
  const { loading, error, data } = useQuery(GET_MOST_SEARCHED, {
    variables: { getMostSearchedLimit: 4 },
  });

  if (loading) return <LoadingBar />;
  if (error) return null;

  return (
    <ImagesSection>
      {data.getMostSearched.map((breed) => (
        <Item key={breed.breedId}>
          <ImgWrapper onClick={() => history.push(`details/${breed.breedId}`)}>
            <Img src={breed.breedImg.url} />
          </ImgWrapper>
          <Desc>{breed.name}</Desc>
        </Item>
      ))}
    </ImagesSection>
  );
};

const GET_MOST_SEARCHED = gql`
  query Query($getMostSearchedLimit: Int) {
    getMostSearched(limit: $getMostSearchedLimit) {
      name
      breedImg {
        url
        id
      }
      visited
      breedId
    }
  }
`;
