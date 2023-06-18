import styled from 'styled-components';
import Button from '@/components/Button';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/components/CartContext';
import Image from 'next/image';

const ProductWrapper = styled.div`
  margin-bottom: 30px;
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 30px;
  height: 130px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 180px;
    border-radius: 7px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 15px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

export default function ProductBox({ _id, title, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = '/product/' + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <Image src={images?.[0]} alt=" " width={300} height={200} />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button block onClick={() => addProduct(_id)} primary outline>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
