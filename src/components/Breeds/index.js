import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: -40px;
  padding: 80px 108px 108px 108px;
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

  & * {
    margin: 0;
    color: #291507;
  }
`;

const Title = styled.p`
  grid-area: title;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  &:after {
    content: "";
    margin-top: 8px;
    display: block;
    width: 59.18px;
    height: 3.21px;
    left: 204px;
    top: 707.19px;

    background: #4d270c;
    border-radius: 77px;
  }
`;

const BigText = styled.p`
  grid-area: bigText;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
`;

const More = styled.p`
  grid-area: more;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  text-align: right;
  align-self: end;

  color: rgba(41, 21, 7, 0.6);
`;

const ImagesSection = styled.div`
  grid-area: images;
  display: grid;
  gap: 51px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  max-height: 220px;
  max-width: 100%;

  ${"" /* doesn't work on ff */}
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  border-radius: 24px;
`;

const Desc = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  word-wrap: anywhere;
`;

const Breeds = () => {
  return (
    <Wrapper>
      <Title>Most Searched Breeds</Title>
      <BigText>66+ Breeds For you to discover</BigText>
      <More>SEE MORE</More>
      <ImagesSection>
        <Item>
          <ImgWrapper>
            <Img src="https://via.placeholder.com/220" />
          </ImgWrapper>
          <Desc>Bengal</Desc>
        </Item>
        <Item>
          <ImgWrapper>
            <Img src="https://via.placeholder.com/220x400" />
          </ImgWrapper>
          <Desc>Norwegian Forest Cat</Desc>
        </Item>
        <Item>
          <ImgWrapper>
            <Img src="https://via.placeholder.com/50" />
          </ImgWrapper>
          <Desc>Bengal</Desc>
        </Item>
        <Item>
          <ImgWrapper>
            <Img src="https://via.placeholder.com/270x100" />
          </ImgWrapper>
          <Desc>BenNorwegianNorwegianNorwegiangal</Desc>
        </Item>
      </ImagesSection>
    </Wrapper>
  );
};

export default Breeds;
