import { ReactNode } from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import { ContainerGrid } from "./styles";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <ContainerGrid>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </ContainerGrid>
  );
};


export default Layout;