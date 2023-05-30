import styled from 'styled-components';

const FooterContainer = styled.footer`
    // background-color: #f2f2f2;
  text-align: center;
  padding-top: 100px;
  display:flex;
`;
const Column = styled.div`
  display: grid;
  flex: 1;
`;
const Text = styled.div`
  padding: 10px;
  display: grid;
  flex: 1;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
      <Text> Company</Text>
        <Text> Hello</Text>
        <Text> Copyright @2023 delivery website</Text>
      </Column>
      <Column>
        <Text> Company</Text>
        <Text> Hello</Text>
        <Text> Hello</Text>
      </Column>
      <Column>
        <Text> Suppport</Text>
        <Text> Hello</Text>
        <Text> Hello</Text>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
