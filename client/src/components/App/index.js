import { Switch, Route } from "react-router-dom";
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
  return (
    <Wrapper className="App">
      <Logo />
      <Switch>
        <Route path="/details/:id">
          <BreedDetails />
        </Route>
        <Route path="/top">
          <MostSearchedBreeds />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </Wrapper>
  );
}

export default App;
