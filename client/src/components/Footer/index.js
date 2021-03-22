import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../assets/CatwikiLogo.svg";
import { ReactComponent as CSvg } from "../../assets/copyright-24px.svg";

const Wrapper = styled.div`
  width: calc(100% - 80px * 2);
  background: #000000;
  margin-bottom: -200px;
  padding: 20px 80px;
  border-radius: 42px 42px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(LogoSvg)`
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(154deg)
    brightness(102%) contrast(103%);
`;

const Credits = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

const CreditsUsername = styled.span`
  font-weight: 700;
  text-decoration: underline;
`;

const CreditsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const Copyright = styled(CSvg)`
  fill: white;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Logo />
      <CreditsWrapper>
        <Copyright />
        <Credits>
          created by <CreditsUsername>Łukasz Raubo</CreditsUsername> -
          devChallenges.io 2021
        </Credits>
      </CreditsWrapper>
    </Wrapper>
  );
};

export default Footer;
