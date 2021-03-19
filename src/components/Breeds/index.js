import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "../../images/arrow_right_alt-black-24dp.svg";

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
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
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
    width: 59.18px;
    height: 3.21px;

    background: #4d270c;
    border-radius: 77px;
  }
`;

const BigText = styled.p`
  grid-area: bigText;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
`;

const MoreWrapper = styled.div`
  grid-area: more;
  align-self: end;
  justify-self: end;
`;

const More = styled.div`
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
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
  word-wrap: anywhere;
`;

const Breeds = () => {
  return (
    <Wrapper>
      <Title>Most Searched Breeds</Title>
      <BigText>66+ Breeds For you to discover</BigText>
      <MoreWrapper>
        <More>
          SEE MORE <Arrow />
        </More>
      </MoreWrapper>
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
