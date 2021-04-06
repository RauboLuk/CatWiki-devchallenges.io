import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowSvg } from "../../assets/arrow_right_alt-black-24dp.svg";
import image_1 from "../../assets/image_1.png";
import image_2 from "../../assets/image_2.png";
import image_3 from "../../assets/image_3.png";

const Wrapper = styled.div`
  padding: min(5vw, 108px);
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 46px;

  padding-bottom: ${(props) => (props.hideLink ? "24vh" : null)};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: min(5vw, 108px) 0;
    gap: 62px;
  }

  & * {
    margin: 0;
    color: #291507;
    font-family: Montserrat;
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
  }
`;

const TextSection = styled.div`
  width: 90%;
  padding-top: min(80px, 5vw);

  @media (max-width: 768px) {
    width: 101%;
  }
`;

const BigText = styled.p`
  font-weight: bold;
  font-size: min(48px, 4vw);
  line-height: min(59px, 4vw);

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
  }

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
  padding-top: 40px;
  padding-bottom: 45px;
  width: 85%;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 768px) {
    width: 95%;
    padding-bottom: 26px;
  }
`;

const More = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: start;
  width: max-content;
  color: rgba(41, 21, 7, 0.6);

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

const Arrow = styled(ArrowSvg)`
  padding-left: 14px;
  fill: #7f736a;
`;

const ImgSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-items: end;
  gap: 27px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 27px;
  
  @media (max-width: 768px) {
    gap: 15px;
  }

  & img:nth-child(1) {
    order: 2;
    align-self: flex-end;
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

const Article = ({ hideLink }) => {
  return (
    <Wrapper hideLink>
      <TextSection>
        <BigText>Why should you have a cat?</BigText>
        <Snippet>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </Snippet>
        {hideLink ? null : (
          <More to={"/more"}>
            READ MORE <Arrow />
          </More>
        )}
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
