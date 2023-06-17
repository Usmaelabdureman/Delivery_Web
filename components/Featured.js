import Center from '@/components/Center';
import styled from 'styled-components';
import Button from '@/components/Button';
import CartIcon from '@/components/icons/CartIcon';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Bg = styled.div`
  background-color: #edf2f7;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #71797e;
  font-size: 1.3rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 350px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const router = useRouter();
  const handleClick = () => {
    router.push('/products');
  };

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>Deliverd To Your Door</Title>
              <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, it to make a type specimen book. It has
                survived not only five centuries Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, it to make a
                type specimen book. It has survived not only five centuries
                Lorem
              </Desc>
              <ButtonsWrapper>
                <Button primary onClick={handleClick}>
                  <CartIcon />
                  Order Now
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <Image
              src="https://res.cloudinary.com/creavers-deliveryapp/image/upload/v1687040296/boxqzgas8pscvnlz8jrn.jpg"
              alt="delivery"
              height={200} width={300} />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
