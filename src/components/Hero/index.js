import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import { ReactComponent as SearchSvg } from "../../images/search-black-18dp.svg";
import { ReactComponent as LogoSvg } from "../../images/CatwikiLogo.svg";
import hero from "../../images/HeroImagelg.png";

const HeroWrapper = styled.div`
  margin-top: 30px;
  border-radius: 42px 42px 0px 0px;
  color: white;
  position: relative;
  width: 100%;

  & * {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 395px;
  padding: 108px 0 0 108px;
`;

const HeroBackground = styled.img`
  background: #c4c4c4;
  width: 100%;
  border-radius: 42px 42px 0px 0px;
`;

const HeroLogo = styled(LogoSvg)`
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(293deg)
    brightness(106%) contrast(101%);
  width: 287px;
  height: auto;
`;

const Subtitle = styled.p`
  font-size: 24px;
  line-height: 29px;
`;

const SearchWrapper = styled.div`
  background: white;
  margin-top: 30px;
  height: 69.67px;
  border-radius: 59px;
  display: flex;
  align-items: center;
`;

const SearchBox = styled.input`
  padding-left: 28px;
  width: 80%;
  font-size: 18px;
  line-height: 22px;
  outline: none;
  border: none;
  background: none;

  &::placeholder {
    color: black;
    opacity: 1;
  }
`;

const Prompt = styled(Scrollbars)`
  margin-top: 20px;
  height: 219.72px !important;
  border: 1px solid black;
  background: #ffffff;
  border-radius: 24px;
  font-size: 18px;
  line-height: 22px;
  color: #000000;

  ${(props) => (props.hidden ? "display: none" : null)}

  &::-webkit-scrollbar {
    width: 50px;
  }

  & ul {
    padding: 0 15px;
  }

  & li {
    list-style-type: none;
    height: 56.16px;
    word-wrap: anywhere;
    padding-left: 10px;
    margin-right: 15px;
    display: flex;
    align-items: center;
  }
  & li:hover {
    background: rgba(151, 151, 151, 0.1);
    border-radius: 12px;
  }

  & div:last-child {
    margin: 0 15px 0 0;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBackground src={hero} />
      <HeroContent>
        <HeroLogo />
        <Subtitle>Get to know more about your cat breed</Subtitle>
        <SearchWrapper>
          <SearchBox type="text" placeholder="Enter your breed" />
          <SearchSvg />
        </SearchWrapper>
        <Prompt hidden>
          <ul>
            <li>American Bobtail</li>
            <li>xd</li>
            <li>American Shorthair</li>
            <li>American Wirehair</li>
            <li>xd</li>
            <li>xd</li>
            <li>xd</li>
            <li>xd</li>
          </ul>
        </Prompt>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
