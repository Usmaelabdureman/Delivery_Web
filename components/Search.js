import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Button from './Button';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  height: 9px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 5px;
`;

const SearchButton = styled.button`
  padding: 8px;
  margin-left: 15px;
  // background-color: #007bff;
  color: #aaa;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Search = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    router.push(`/search?term=${searchTerm}`);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* <SearchButton onClick={handleSearch}>Search</SearchButton> */}
      <Button block onClick={handleSearch} secondary outline>
            Search
          </Button>
    </SearchContainer>
  );
};

export default Search;
