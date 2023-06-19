import { SignIn } from "@clerk/nextjs";
import styled from "styled-components";

const Box = styled.div`
  background-color: #ff9;
  border-radius: 10px;
  padding: 30px;
  justify-content: center;
  justify-self: center;
  display: flex;
`;
const Page = () => {
  return (
    <Box>
      <SignIn path="/sign-in" routing="path" />
    </Box>
  );
};

export default Page;
