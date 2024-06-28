import { useState, ChangeEvent } from "react";
import styled from "styled-components";
import SearchIcon from "/public/assets/icon-search.svg";

interface Props {
  onSearch: (query: string) => void;
}

const Searchinput: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <InputWrapper>
      <img src={SearchIcon} alt="Search Icon" />
      <StyledInput
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #10141e;
  padding: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  background: #10141e;
  color: white;
  margin-left: 10px;
  outline: none;
`;

export default Searchinput;
