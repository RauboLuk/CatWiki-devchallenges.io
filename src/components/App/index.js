import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../images/CatwikiLogo.svg";

import Hero from "../Hero";
import Breeds from "../Breeds";

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

function App() {
  return (
    <Wrapper className="App">
      <Logo />
      <Hero />
      <Breeds />
      <div>Most Searched Breeds</div>
      <div>Why should you have a cat?</div>
      <footer>CatWiki</footer>
    </Wrapper>
  );
}

export default App;
