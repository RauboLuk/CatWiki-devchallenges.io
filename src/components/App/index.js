import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../images/CatwikiLogo.svg";

import BreedDetails from "../BreedDetails";
import Hero from "../Hero";
import Breeds from "../Breeds";
import Article from "../Article";
import Footer from "../Footer";

const Wrapper = styled.div`
  padding: 26px 96px;
  max-width: 1248px;
  margin: 0 auto;
`;

const Logo = styled(LogoSvg)`
  filter: invert(0%) sepia(6%) saturate(10%) hue-rotate(306deg) brightness(103%)
    contrast(101%);
`;

function App() {
  return (
    <Wrapper className="App">
      <Logo />
      <BreedDetails />
      <Footer />
    </Wrapper>
  );
  return (
    <Wrapper className="App">
      <Logo />
      <Hero />
      <Breeds />
      <Article />
      <Footer />
    </Wrapper>
  );
}

export default App;
