import styled from 'styled-components';
import Button from '@/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: bold;
  font-size: 1.2rem;
  color: inherit;
  text-decoration: none;
  margin: 10px;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
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

export default function CategoryBox({ _id, name, properties }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/category/${_id}`);
  };
  const url = '/category/' + _id;
  return (
    <ProductWrapper>
      <Title href={url}>{name}</Title>
      <WhiteBox href={url}></WhiteBox>
      <ProductInfoBox>
        <PriceRow>
          <Button block onClick={() => handleClick(_id)} primary outline>
            View All
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
