import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/CatwikiLogo.svg";

import BreedDetails from "../BreedDetails";
import Footer from "../Footer";
import MainPage from "../MainPage";

const Wrapper = styled.div`
  padding: 26px 96px;
  max-width: 1248px;
  margin: 0 auto;
`;

const Logo = styled(LogoSvg)`
  filter: invert(0%) sepia(6%) saturate(10%) hue-rotate(306deg) brightness(103%)
    contrast(101%);
  margin-bottom: 30px;
`;

function App() {
  let [x, setX] = useState(true);
  if (x)
    return (
      <Wrapper className="App">
        <button onClick={() => setX(!x)} />
        <Logo />
        <BreedDetails />
        <Footer />
      </Wrapper>
    );
  return (
    <Wrapper className="App">
      <button onClick={() => setX(!x)} />
      <Logo />
      <MainPage />
      <Footer />
    </Wrapper>
  );
}

export default App;
