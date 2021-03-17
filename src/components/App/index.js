import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../images/CatwikiLogo.svg";
import { ReactComponent as SearchSvg } from "../../images/search-black-18dp.svg";
import hero from "../../images/HeroImagelg.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 26px 96px;
  max-width: 1248px;
  margin: 0 auto;
`;

const Logo = styled(LogoSvg)`
  align-self: flex-start;
  filter: invert(0%) sepia(6%) saturate(10%) hue-rotate(306deg) brightness(103%)
    contrast(101%);
`;

const Hero = styled.div`
  margin-top: 20px;
  border-radius: 42px 42px 0px 0px;
  color: white;
  position: relative;
  width: 100%;
`;

const HeroWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 395px;
  padding: 108px;
`;

const HeroBackground = styled.img`
  background: #c4c4c4;
  width: 100%;
  ${"" /* max-height: 100%; */}
  border-radius: 42px 42px 0px 0px;
`;

const HeroLogo = styled(Logo)`
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(293deg)
    brightness(106%) contrast(101%);
  width: 287px;
  height: auto;
`;

const Subtitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

const SearchWrapper = styled.div`
  background: white;
  margin-top: 52px;
  height: 69.67px;
  border-radius: 59px;
  display: flex;
  align-items: center;
`;

const SearchBox = styled.input`
  padding-left: 28px;
  width: 80%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
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
const SearchIcon = styled(SearchSvg)``;

function App() {
  return (
    <Wrapper className="App">
      <Logo />
      <Hero src={hero}>
        <HeroBackground src={hero} />
        <HeroWrapper>
          <HeroLogo />
          <Subtitle>Get to know more about your cat breed</Subtitle>
          <SearchWrapper>
            <SearchBox type="text" placeholder="Enter your breed" />
            <SearchIcon />
          </SearchWrapper>
        </HeroWrapper>
      </Hero>
      <div>Most Searched Breeds</div>
      <div>Why should you have a cat?</div>
      <footer>CatWiki</footer>
    </Wrapper>
  );
}

export default App;
