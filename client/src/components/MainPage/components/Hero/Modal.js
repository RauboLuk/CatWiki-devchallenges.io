import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { ReactComponent as SearchSvg1 } from "../../../../assets/search-black-18dp.svg";
import { SearchResult } from "./index";

const ModalContent = styled.div`
  padding: 15px 18px;
  background: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;

  & * {
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
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
`;

const CloseWrapper = styled(CloseIcon)`
  box-sizing: border-box;
  padding: 4px;
  width: 40px;
  height: 40px;
  align-self: flex-end;

  background: rgba(151, 151, 151, 0.1);
  border-radius: 8px;
`;

const SearchWrapper = styled.div`
  height: min(69.67px, 9vw);
  border: 1px solid #000000;
  border-radius: 59px;
  display: flex;
  align-items: center;
  margin: 35px 0;
`;

const SearchBox = styled.input`
  padding-left: 20px;
  width: 85%;
  outline: none;
  border: none;
  background: none;
  flex: 1;

  &::placeholder {
    color: black;
    opacity: 1;
  }
`;

const SearchSvg = styled(SearchSvg1)`
  padding: 20px;
`;

const Mod = ({
  isModalOpen,
  setIsModalOpen,
  placeholder,
  text,
  handleChange,
  data,
  loading,
}) => {
  return (
    <Modal open={isModalOpen}>
      <ModalContent>
        <CloseWrapper
          onClick={() => {
            setIsModalOpen(false);
          }}
        />
        <SearchWrapper>
          <SearchBox
            type="text"
            placeholder={placeholder}
            value={text}
            onChange={handleChange}
          />
          <SearchSvg />
        </SearchWrapper>{" "}
        <SearchResult result={data} loading={loading} />
      </ModalContent>
    </Modal>
  );
};

export default Mod;
