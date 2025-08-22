import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
import styled from "styled-components";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export function UserLayout() {
  return (
    <>
      <Header />
      <PageWrapper>
        <Outlet />
        <Footer />
      </PageWrapper>
    </>
  );
}
