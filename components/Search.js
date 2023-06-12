import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 8px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
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
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default Search;
