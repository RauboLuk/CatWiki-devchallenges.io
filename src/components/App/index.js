import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../images/CatwikiLogo.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 26px 96px;
`;

const Logo = styled(LogoSvg)`
  align-self: flex-start;
`;

function App() {
  return (
    <Wrapper className="App">
      <Logo />
      <div>enter your breed</div>
      <div>Most Searched Breeds</div>
      <div>Why should you have a cat?</div>
      <footer>CatWiki</footer>
    </Wrapper>
  );
}

export default App;
