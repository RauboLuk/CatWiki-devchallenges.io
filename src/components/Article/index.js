import styled from "styled-components";
import image_1 from "../../images/image_1.png";
import image_2 from "../../images/image_2.png";
import image_3 from "../../images/image_3.png";

const Wrapper = styled.div`
  padding: 108px;

  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 46px;

  & * {
    margin: 0;
    color: #291507;
  }
`;

const TextSection = styled.div`
  width: 100%;
`;

const BigText = styled.p`
  grid-area: bigText;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;

  &:before {
    content: "";
    margin-bottom: 16px;
    display: block;
    width: 59.18px;
    height: 3.21px;

    background: #4d270c;
    border-radius: 77px;
  }
`;

const Snippet = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
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

const ImgSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  justify-items: end;
  gap: 27px;
`;
const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 27px;

  & img:nth-child(1) {
    order: 2;
    max-width: 80%;
  }
  & img:nth-child(2) {
    order: 1;
  }
}
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  border-radius: 24px;
`;

const Article = () => {
  return (
    <Wrapper>
      <TextSection>
        <BigText>Why should you have a cat?</BigText>
        <Snippet>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </Snippet>
        <More>READ MORE</More>
      </TextSection>
      <ImgSection>
        <ImgWrapper>
          <Img src={image_1} />
          <Img src={image_2} />
        </ImgWrapper>
        <Img src={image_3} />
      </ImgSection>
    </Wrapper>
  );
};

export default Article;
