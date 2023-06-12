import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 10px;
  background-color: #222;
  color: #fff;
    // background: radial-gradient(circle, rgba(128, 128, 128, 1) 0%, rgba(255, 255, 255, 1) 100%);
  @media (max-width: 1000px) {
    padding: 70px 10px;
  }
`;

export const Wrapper = styled.div`
color:#fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 1220px;
  margin: 0 auto;
  //   width:100%;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
