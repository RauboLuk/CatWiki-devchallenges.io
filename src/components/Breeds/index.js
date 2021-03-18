import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 686.4px;
  margin-top: -40px;
  padding-top: 40px;

  background: #e3e1dc;
`;

const ImagesSection = styled.div`
  display: flex;
  gap: 51px;
  justify-content: center;
`;

const Item = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  height: 220px;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  max-height: 220px;
  max-width: 220px;
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
      <p>Most Searched Breeds</p>
      <p>66+ Breeds For you to discover</p>
      <p>SEE MORE</p>
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
