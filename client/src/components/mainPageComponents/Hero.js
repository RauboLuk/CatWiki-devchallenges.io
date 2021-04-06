import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { gql, useLazyQuery } from "@apollo/client";

import { Scrollbars } from "react-custom-scrollbars";
import { ReactComponent as SearchSvg } from "../../assets/search-black-18dp.svg";
import { ReactComponent as LogoSvg } from "../../assets/CatwikiLogo.svg";

import hero from "../../assets/HeroImagelg.png";
import Modal from "./Modal";

const HeroWrapper = styled.div`
  border-radius: 42px 42px 0px 0px;
  color: white;
  position: relative;
  width: 100%;

  & * {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: min(45%, 395px);
  padding: min(5vw, 108px) 0 0 min(5vw, 108px);
`;

const HeroBackground = styled.img`
  background: #c4c4c4;
  width: 100%;
  border-radius: 42px 42px 0px 0px;
`;

const HeroLogo = styled(LogoSvg)`
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(293deg)
    brightness(106%) contrast(101%);
  width: min(287px, 20vw);
  height: auto;
`;

const Subtitle = styled.p`
  font-size: min(24px, 2.5vw);
  line-height: 29px;

  @media (max-width: 1024px) {
    font-size: 2.5vw;
    line-height: 3vw;
  }
`;

const SearchWrapper = styled.div`
  background: white;
  margin-top: min(1vw, 30px);
  height: min(69.67px, 7vw);
  border-radius: 59px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const SearchBox = styled.input`
  padding-left: 28px;
  width: 80%;
  font-size: 18px;
  line-height: 22px;
  outline: none;
  border: none;
  background: none;

  @media (max-width: 768px) {
    padding-left: 13px;
    font-size: 12px;
    line-height: 15px;
    width: 70%;
  }

  &::placeholder {
    color: black;
    opacity: 1;
  }
`;

const Prompt = styled(Scrollbars)`
  margin-top: 20px;
  height: 219.72px !important;
  border: 1px solid black;
  background: #ffffff;
  border-radius: 24px;
  font-size: 18px;
  line-height: 22px;
  color: #000000;

  ${(props) => (props.hidden ? "display: none" : null)}

  &::-webkit-scrollbar {
    width: 50px;
  }

  & ul {
    padding: 0 15px;
  }

  & li {
    list-style-type: none;
    height: 56.16px;
    word-wrap: anywhere;
    padding-left: 10px;
    margin-right: 15px;
    display: flex;
    align-items: center;
  }
  & li:hover {
    background: rgba(151, 151, 151, 0.1);
    border-radius: 12px;
  }

  & div:last-child {
    margin: 0 15px 0 0;
  }
`;

const Link = styled(LinkR)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

const Hero = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("Enter your breed");
  const [text, setText] = useState("");
  const [searchDebounced] = useDebounce(text, 1000);

  const [searchForBreed, { called, loading, data }] = useLazyQuery(GET_BREEDS, {
    variables: {
      name: searchDebounced,
    },
  });
  useEffect(() => {
    if (searchDebounced !== "") {
      searchForBreed();
    }
  }, [searchDebounced, searchForBreed]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", debounced);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 768 && placeholder !== "Enter your breed") {
      setPlaceholder("Enter your breed");
      if (isModalOpen) setIsModalOpen(false);
    } else if (window.innerWidth <= 768 && placeholder !== "Search") {
      setPlaceholder("Search");
    }
  };
  const debounced = useDebouncedCallback(handleResize, 200);

  const openModal = () => {
    if (window.innerWidth <= 768) setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFocusChange = (isFocused, e) => {
    // to fix warning when link is pressed
    if (e?.relatedTarget) return null;
    setIsSearchFocused(isFocused);
  };
  return (
    <HeroWrapper>
      <HeroBackground src={hero} />
      <HeroContent>
        <HeroLogo />
        <Subtitle>Get to know more about your cat breed</Subtitle>
        <SearchWrapper>
          <SearchBox
            type="text"
            placeholder={placeholder}
            value={text}
            onClick={openModal}
            onChange={handleChange}
            onFocus={() => handleFocusChange(true)}
            onBlur={(e) => handleFocusChange(false, e)}
          />
          <SearchSvg />
        </SearchWrapper>
        <Prompt
          hidden={!isSearchFocused || !called || window.innerWidth <= 768}
        >
          <SearchResult result={data} loading={loading} />
        </Prompt>
      </HeroContent>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        placeholder={placeholder}
        text={text}
        handleChange={handleChange}
        data={data}
        loading={loading}
      />
    </HeroWrapper>
  );
};

export default Hero;

export const SearchResult = ({ result, loading }) => {
  return (
    <ul>
      {loading ? (
        <li>...</li>
      ) : result?.searchForBreed.length > 0 ? (
        result?.searchForBreed.map((b) => (
          <li key={b.id}>
            <Link to={`/details/${b.id}`}>{b.name}</Link>
          </li>
        ))
      ) : (
        <li>No results</li>
      )}
    </ul>
  );
};

const GET_BREEDS = gql`
  query Query($name: String!) {
    searchForBreed(str: $name) {
      id
      name
    }
  }
`;
