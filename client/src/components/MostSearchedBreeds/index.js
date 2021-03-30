import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

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
`;

const Img = styled.img`
  max-width: 170px;

  @media (max-width: 768px) {
    max-width: 130px;
  }
`;

const TextWrapper = styled.div``;

const Breed = styled.p`
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;

  @media (max-width: 768px) {
    font-size: 30px;
    word-break: break-all;
  }
`;

const Desc = styled.p`
  padding: 20px 0;
`;

const MostSearchedBreeds = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error. Try again later.</div>;

  const renderBreed = (breed, i) => {
    return (
      <ListEle key={breed.breedId}>
        <div>
          <Img src={breed.breedImg.url} alt="" />
        </div>
        <TextWrapper>
          <Breed>
            {i+1}. {breed.name}
          </Breed>
          <Desc>{breed.breed.description}</Desc>
        </TextWrapper>
      </ListEle>
    );
  };
  return (
    <Wrapper>
      <Title>Top {data?.getMostSearched.length} most searched breeds</Title>
      <List>
        {data?.getMostSearched.length > 0
          ? data.getMostSearched.map((breed, i) => renderBreed(breed, i))
          : null}

        {/* <ListEle>
          <div>
            <Img src="https://via.placeholder.com/580x380" alt="" />
          </div>
          <TextWrapper>
            <Breed>1. Bengal</Breed>
            <Desc>
              Bengals are a lot of fun to live with, but they're definitely not
              the cat for everyone, or for first-time cat owners. Extremely
              intelligent, curious and active, they demand a lot of interaction
              and woe betide the owner who doesn't provide it.{" "}
            </Desc>
          </TextWrapper>
        </ListEle>
        <ListEle>
          <div>
            <Img src="https://via.placeholder.com/380x580" alt="" />
          </div>
          <TextWrapper>
            <Breed>2. Chartreux</Breed>
            <Desc>
              The Chartreux is generally silent but communicative. Short play
              sessions, mixed with naps and meals are their perfect day. Whilst
              appreciating any attention you give them, they are not demanding,
              content instead to follow you around devotedly, sleep on your bed
              and snuggle with you if you’re not feeling well.The Chartreux is
              generally silent but communicative. Short play sessions, mixed
              with naps and meals are their perfect day. Whilst appreciating any
              attention you give them, they are not demanding, content instead
              to follow you around devotedly, sleep on your bed and snuggle with
              you if you’re not feeling well.
            </Desc>
          </TextWrapper>
        </ListEle>
        <ListEle>
          <Img src="https://via.placeholder.com/380x380" alt="" />
          <TextWrapper>
            <Breed>XD</Breed>
            <Desc>dasd</Desc>
          </TextWrapper>
        </ListEle>
        <ListEle>
          <Img src="https://via.placeholder.com/380x380" alt="" />
          <TextWrapper>
            <Breed>XD</Breed>
            <Desc>dasd</Desc>
          </TextWrapper>
        </ListEle>
        <ListEle>
          <Img src="https://via.placeholder.com/380x380" alt="" />
          <TextWrapper>
            <Breed>XD</Breed>
            <Desc>dasd</Desc>
          </TextWrapper>
        </ListEle> */}
      </List>
    </Wrapper>
  );
};

export default MostSearchedBreeds;

const GET_DATA = gql`
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
