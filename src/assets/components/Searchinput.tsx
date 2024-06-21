import styled from "styled-components";
import Search from "/public/assets/icon-search.svg";

function Searchinput() {
  return (
    <InputWrapper>
      <img src={Search} alt="Search Icon" />
      <StyledInput type="text" placeholder="Search..." />
    </InputWrapper>
  );
}

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
