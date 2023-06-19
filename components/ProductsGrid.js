import styled from 'styled-components';
import ProductBox from '@/components/ProductBox';
import { useState } from 'react';
const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid({ products }) {
  const [search,setSearch] = useState('')
  return (
    <StyledProductsGrid>
      {
        products.filter((val)=>{
          if(search === ''){
            return val
          }else if(val.name.toLowerCase().includes(search.toLowerCase())){
            return val
          }
        }
        ).map((product) => (
          <ProductBox key={product._id} {...product} />
        ))

      }
      {/* {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))} */}
    </StyledProductsGrid>
  );
}
