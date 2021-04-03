import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15vh 0 50vh;

  @media (max-width: 350px) {
    max-width: 196px;
  }
`;

const Text = styled.p`
  font-family: Montserrat;
  font-size: 38px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Link = styled(LinkR)`
  font-family: Montserrat;
  font-size: 24px;
  color: rgba(41, 21, 7, 0.6);

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Error = ({ message = "Error" }) => {
  console.log(message);
  return (
    <Wrapper>
      <Text>{message}</Text>
      <Link to={"/"}>Go back to home page?</Link>
    </Wrapper>
  );
};

export default Error;
