import Header from "components/Header";
import { ComponentEnum } from "types/common";

import { StyledLayout } from "./styles";

const Layout = ({ element, type }: { element: any; type: ComponentEnum }) => {
  return (
    <>
      <Header type={type} />
      <StyledLayout>{element}</StyledLayout>
    </>
  );
};

export default Layout;
