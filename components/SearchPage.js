import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const { term } = router.query;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simulated search functionality
    // Replace this with your actual search implementation
    const fetchData = async () => {
      try {
        // Perform the search based on the term
        const response = await fetch(`/api/search?term=${term}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error searching:', error);
      }
    };

    if (term) {
      fetchData();
    }
  }, [term]);

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.filter(function
          (val){
            if(term === ''){
              return val
            }else if(val.name.toLowerCase().includes(term.toLowerCase())){
              return val
            }
          }).map((product) => (
            <li key={product._id}>{product.title}</li>
          ))
          }
          {/* {searchResults.map((product) => (
            <li key={product._id}>{product.title}</li>
          ))} */}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
