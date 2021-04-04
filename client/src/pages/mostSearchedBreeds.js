import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

import LoadingBar from "../components/LoadingBar";
import ErrorMsg from "../components/ErrorMsg";
import { useHistory } from "react-router";

const Wrapper = styled.div`
  padding-bottom: 15vh;
  & * {
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 50px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 25px;
  }
`;

const ListEle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;

  @media (max-width: 768px) {
    gap: 24px;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Img = styled.img`
  max-width: 170px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-width: 130px;
  }
  @media (max-width: 420px) {
    max-width: 150px;
  }
`;

const TextWrapper = styled.div``;

const Breed = styled.p`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;

  @media (max-width: 768px) {
    font-size: 30px;
    word-break: break-word;
  }
`;

const Desc = styled.p`
  padding: 20px 0;
`;

const MostSearchedBreeds = () => {
  let history = useHistory();
  const { loading, error, data } = useQuery(GET_BREEDS);

  if (loading) return <LoadingBar />;
  if (error) return <ErrorMsg message={"Ooops, unknown error."} />;

  const createElementBreed = (breed, i) => {
    return (
      <ListEle
        key={breed.breedId}
        onClick={() => {
          history.push(`/details/${breed.breedId}`);
        }}
      >
        <div>
          <Img src={breed.breedImg.url} alt="" />
        </div>
        <TextWrapper>
          <Breed>
            {i + 1}. {breed.name}
          </Breed>
          <Desc>{breed.breed.description}</Desc>
        </TextWrapper>
      </ListEle>
    );
  };
  return (
    <Wrapper>
      <Title>Top {data.getMostSearched?.length} most searched breeds</Title>
      <List>
        {data.getMostSearched?.length > 0
          ? data.getMostSearched.map((breed, i) => createElementBreed(breed, i))
          : null}
      </List>
    </Wrapper>
  );
};

export default MostSearchedBreeds;

const GET_BREEDS = gql`
  query Query {
    getMostSearched {
      name
      breedId
      imgId
      visited
      breed {
        id
        description
      }
      breedImg {
        id
        url
      }
    }
  }
`;
