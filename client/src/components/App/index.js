import { useHistory, Switch, Route } from "react-router-dom";
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

  @media (max-width: 1024px) {
    padding: 18px;
  }
`;

const Logo = styled(LogoSvg)`
  filter: invert(0%) sepia(6%) saturate(10%) hue-rotate(306deg) brightness(103%)
    contrast(101%);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function App() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <Wrapper className="App">
      <Logo onClick={handleClick} />
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
