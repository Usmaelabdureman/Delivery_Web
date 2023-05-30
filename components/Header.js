import Link from 'next/link';
import styled from 'styled-components';
import Center from '@/components/Center';
import { useContext, useState } from 'react';
import { CartContext } from '@/components/CartContext';
import BarsIcon from '@/components/icons/Bars';

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 45px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>
            <img
              src="https://blbstoragefordeliveryapp.blob.core.windows.net/deliveryappimagecontainer/1685281673643.png"
              alt="home"
              width={50}
              height={50}
            />
          </Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All products</NavLink>
            {/* <NavLink href={'/categories'}>Categories</NavLink> */}
            {/* <NavLink href={'/account'}>Account</NavLink> */}
          </StyledNav>
          <NavLink href={'/cart'}>
            <img
              src="https://blbstoragefordeliveryapp.blob.core.windows.net/deliveryappimagecontainer/1685281679232.png"
              alt=""
              width={30}
              height={30}
            ></img>
            ({cartProducts.length})
          </NavLink>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
