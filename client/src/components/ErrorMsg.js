import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15vh 0 50vh;
`;

const Text = styled.p`
  font-family: Montserrat;
  font-size: 38px;
`;

const Link = styled(LinkR)`
  font-family: Montserrat;
  font-size: 24px;
  color: rgba(41, 21, 7, 0.6);
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
