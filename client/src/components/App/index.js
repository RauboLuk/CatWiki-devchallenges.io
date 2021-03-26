import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/CatwikiLogo.svg";

import MainPage from "../MainPage";
import BreedDetails from "../BreedDetails";
import MostSearchedBreeds from "../MostSearchedBreeds";
import Footer from "../Footer";

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
  let [x, setX] = useState(false);
  if (x)
    return (
      <Wrapper className="App">
        <Logo />
        <button onClick={() => setX(!x)} />
        <BreedDetails />
        <Footer />
      </Wrapper>
    );
  return (
    <Wrapper className="App">
      <Logo />
      <button onClick={() => setX(!x)} />
      <MainPage />
      <Footer />
    </Wrapper>
  );
  return (
    <Wrapper className="App">
      <Logo />
      <button onClick={() => setX(!x)} />
      <MostSearchedBreeds />
      <Footer />
    </Wrapper>
  );
}

export default App;
